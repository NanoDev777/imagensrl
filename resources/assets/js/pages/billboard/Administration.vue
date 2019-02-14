<template>
  <v-container fluid grid-list-md v-if="view">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex d-flex xs12 sm12 md12>
                <v-combobox
                  v-model="select"
                  :items="items"
                  chips
                  label="Buscar espacio"
                  item-text="Cod_espacio"
                  item-value="Id_espacio"
                  :search-input.sync="search"
                  :loading="loading"
                  :disabled="loader"
                  data-vv-name="billboard"
                  v-validate="'required'"
                  :error-messages="errors.collect('billboard')"
                ></v-combobox>
              </v-flex>
              <v-btn :disabled="select == null" @click="getBillboard" :loading="loader"><v-icon>list</v-icon></v-btn>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                  label="Latitud *"
                  v-model="form.latitude"
                  data-vv-name="latitude"
                  v-validate="'required|decimal:12|max:18'"
                  :error-messages="errors.collect('latitude')"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12>
                <v-text-field
                  label="Longitud *"
                  v-model="form.longitude"
                  data-vv-name="longitude"
                  v-validate="'required|decimal:12|max:18'"
                  :error-messages="errors.collect('longitude')"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12>
                <v-text-field 
                  label="Seleccione imagen 360" 
                  @click='pickFile' 
                  v-model='imageName' 
                  prepend-icon='attach_file'
                ></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                 @change="onImageChange"
                >
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn @click="upload">
              Guardar Cambios
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <div id="photosphere" class="photosphere" v-show="form.photosphere != null"></div>
          <img v-show="form.photosphere == null" height="100%" width="100%" src="/img/sin-imagen.jpg"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  import { mapGetters } from 'vuex'

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data() {
      return {
        view: false,
        loading: false,
        loader: false,
        success: false,
        search: null,
        select: null,
        entries: [],
        panorama: null,
        form: {
          id: null,
          latitude: null,
          longitude: null,
          photosphere: null,
          imageFile: ''
        },
        imageName: '',
        dictionary: {
          custom: {
            billboard: {
              required: () => 'Este campo es requerido'
            },
            latitude: {
              required: () => 'Este campo es requerido',
              decimal: 'El campo debe ser numérico y puede contener 2 decimales',
              max: 'Este campo debe tener un máximo de 18 caracteres'
            },
            longitude: {
              required: () => 'Este campo es requerido',
              decimal: 'El campo debe ser numérico y puede contener 2 decimales',
              max: 'Este campo debe tener un máximo de 18 caracteres'
            },
          }
        }
      }
    },

    computed: {
      ...mapGetters([
        'currentUser'
      ]),

      items () {
        return this.entries.map(entry => {
          const Cod_espacio = `${entry.Cod_espacio} / ${entry.Ubicacion}` 
          return Object.assign({}, entry, { Cod_espacio })
        })
      }
    },

    watch: {
      search (val) {
        val && this.querySelections(val)
      }
    },

    mounted () {
      this.$validator.localize('en', this.dictionary)
      if (this.currentUser.profile === 1) this.view = true
    },

    methods: {
      initStreetView() {
        GoogleMapsLoader.KEY = 'AIzaSyBrciONSLZYcR2kEKw24hgZnXIE7-G0me0';
        GoogleMapsLoader.load((google) => {
          this.panorama = new google.maps.StreetViewPanorama(
            document.getElementById('photosphere'),{pano: this.form.photosphere, pov: {heading: 110, pitch: 0}, visible: true});
          this.panorama.registerPanoProvider(this.getCustomPanorama);
        });
      },

      getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
        return `/img/360/${this.form.photosphere}`;
      },

      getCustomPanorama() {
        return {
          links: [],
          copyright: 'IMAGEN S.R.L © 2019',
          tiles: {
            tileSize: new google.maps.Size(5472, 2736),
            worldSize: new google.maps.Size(5472, 2736),
            centerHeading: 105,
            getTileUrl: this.getCustomPanoramaTileUrl
          }
        };
      },

      querySelections (v) {
        this.loading = true
        axios.get(`/api/search-billboard/${v}`)
        .then(response => {
          this.entries = response.data.data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
        })
      },

      getBillboard () {
        let vm = this;
        vm.loader = true
        vm.panorama = null
        vm.form.id = null
        vm.form.latitude = null
        vm.form.longitude = null
        vm.form.photosphere = null 
        vm.form.imageFile = ''
        vm.imageName = ''
        axios.get(`/api/get-billboard/${vm.select.Id_espacio}`)
        .then(response => {
          if (response.data.success) {
            vm.form.id = response.data.data.Id_espacio
            vm.form.latitude = response.data.data.Latitude
            vm.form.longitude = response.data.data.Longitude
            vm.form.photosphere = response.data.data.Photosphere
            if (vm.form.photosphere !== null) vm.initStreetView()
            vm.loader = false
          }
        })
        .catch(error => {
          this.loader = false
        })
      },

      pickFile () {
        this.$refs.image.click ()
      },

      onImageChange(e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length)
          return;
        this.createImage(files[0])
        this.imageName = files[0].name
        this.form.photosphere = files[0].name
      },

      createImage(file) {
        let reader = new FileReader()
        let vm = this;
        reader.onload = (e) => {
          vm.form.imageFile = e.target.result
        };
        reader.readAsDataURL(file)
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if(!allowedExtensions.exec(this.imageName)){
          return false
        } else {
          this.initStreetView()
        }
      },

      upload() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.success = true
            axios.post('/api/save-image', this.form)
            .then(response => {
              if (response.data.success) {
                this.$snotify.simple(response.data.message, 'Felicidades')
              }
            this.success = false
            })
            .catch(error =>{
              this.success = false
            })
          }
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  .photosphere {
    height:100%;
    width: 100%;
  }
</style>