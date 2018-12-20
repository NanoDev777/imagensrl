<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Filtrar Reporte</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-autocomplete
                  :items="cities"
                  v-model="city"
                  label="Ciudad"
                  item-text="Nombre"
                  item-value="Nombre"
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Unipolar', 'Valla', 'Mural']"
                  v-model="type"
                  label="Tipo de valla"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="[{id: 1, text: 'Disponible'},{id:2, text: 'Ocupada'}]"
                  item-text="text"
                  item-value="id"
                  v-model="state"
                  label="Estado actual"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Zona / Ubicación" v-model="filter"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>Puede seleccionar uno ó varios campos, para un listado más específico</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="loading" color="blue darken-1" flat @click.stop="toggleDialog">Cerrar</v-btn>
          <v-btn :loading="loading" color="blue darken-1" flat @click="listBillboardFiltered">Descargar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import CityService from '../../class/city/CityService'

  export default {
    props: {
      dialog: {
        type: Boolean,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        loading: false,
        cities: [],
        city: '',
        type: '',
        state: '',
        filter: ''
      }
    },

    created() {
      let cities = new CityService(axios.get('/api/cities'))
      cities.list()
      .then(cities => {
        this.cities = cities.list
      })
    },

    methods: {
      toggleDialog () {
        this.$emit('toggleDialog')
        this.filter = ''
        this.state = ''
        this.type = ''
        this.city = ''
      },

      buildURL() {
        let city = this.city === '' ? '' : `?city=${this.city}`
        let type = this.type === '' ? '' : `&type=${this.type}`
        let state = this.state === '' ? '' : `&state=${this.state}`
        let filter = this.filter === '' ? '' : `&filter=${this.filter}`
        return `/api/billboard-filtered${city}${type}${state}${filter}`
      },

      listBillboardFiltered() {
        this.loading = true
        axios.get(this.buildURL())
        .then((response) => { 
          const str = response.data.slice(157);
          const linkSource = `data:application/octet-stream;base64,${str}`;
          const downloadLink = document.createElement("a");
          const fileName = "filtrados.pdf";
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
          this.loading = false;
          this.toggleDialog();
        })
        .catch((error) => {
          this.loading = false;
          this.toggleDialog();
        })
      }
    }
  }
</script>