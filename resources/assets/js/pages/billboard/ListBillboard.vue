<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-0">Lista General De Vallas</h1>
              <span class="body-1">Revisa en detalle todas las vallas con las que cuenta nuestra empresa.</span>
            </div>
          </v-card-title>
          <v-card-title>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex d-flex xs12 sm12 md2 lg2>
                  <v-btn outline color="red" @click="allData">
                    Ver todos
                  </v-btn>
                </v-flex>
                <v-flex d-flex xs12 sm12 md2 lg2>
                  <v-radio-group v-model="state" :mandatory="false">
                    <v-radio @change="filterState" label="Disponibles" color="red" value="1"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex d-flex xs12 sm12 md2 lg2>
                  <v-radio-group v-model="state" :mandatory="false">
                    <v-radio @change="filterState" label="Ocupadas" color="red" value="2"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex d-flex xs12 sm12 md3 lg3>
                  <v-autocomplete
                    :items="cities"
                    v-model="city"
                    @change="filterCity"
                    label="Buscar por ciudad.."
                    item-text="Nombre"
                    item-value="Nombre"
                  ></v-autocomplete>
                </v-flex>
                <v-flex d-flex xs12 sm12 md3 lg3>
                  <v-text-field
                    v-model="search"
                    @keypress.enter.prevent="filterData"
                    append-icon="search"
                    label="Buscar"
                    single-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            :pagination.sync="pagination"
            :total-items="totalItems"
            :loading="loading"
            item-key="id"
            class="elevation-1"
            rows-per-page-text="Items por página"
          >
            <v-progress-linear height="2" slot="progress" color="error" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
              <td>{{ props.item.city }}
                <v-btn v-if="props.item.reserved === true" icon disabled small>
                  <v-icon>check_circle_outline</v-icon>
                </v-btn>
              </td>
              <td><span class="body-2">{{ props.item.code }}</span></td>
              <td>{{ props.item.location }}</td>
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.dimension }}</td>
              <td v-if="props.item.state === 1"><v-chip label outline color="green">Disponible</v-chip></td>
              <td v-else><v-chip label outline color="red">Ocupada</v-chip></td>
              <td class="justify-center layout mx-0">
                <v-tooltip left>
                  <v-btn slot="activator" icon :href="`360/${props.item.uuid}`" target="_blank">
                    <v-icon>3d_rotation</v-icon>
                  </v-btn>
                  <span>Ver imagen 360</span>
                </v-tooltip>
                <v-tooltip left>
                  <v-btn 
                    slot="activator" 
                    icon  
                    @click="getBillboardDetail(props.item)"
                    :loading="props.item.loading"
                    :disabled="props.item.disabled"
                  >
                    <v-icon>get_app</v-icon>
                  </v-btn>
                  <span>Descargar presentación</span>
                </v-tooltip>
              </td>
            </template>
            <template slot="footer">
              <td :colspan="headers.length">
                <strong>
                  Las vallas con el icono <v-icon>check_circle_outline</v-icon> son las que tienes alquiladas actualmente.
                </strong>
              </td>
            </template>
            <template slot="no-data">
              <center>Sin Resultados</center>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CityService from '../../class/city/CityService'

  export default {
    data() {
      return {
        search: '',
        state: '',
        city: '',
        loading: false,
        headers: [
          { text: 'Ciudad', value: 'ciudad', width: '150px' },
          { text: 'Código', value: 'codigo' },
          { text: 'Ubicación', value: 'ubicacion' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Dimensión', value: 'dimension' },
          { text: 'Estado', value: 'estado' },
          { text: 'Opciones', value: 'opciones' }
        ],
        cities: [],
        items: [],
        totalItems: 0,
        pagination: {
          rowsPerPage: 10
        }
      }
    },

    computed: {
      ...mapGetters([
        'getBillboard'
      ])
    },

    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
          .then(data => {
            this.items = data.items
          })
        },
        deep: true
      }
    },

    created() {
      const cities = new CityService(axios.get('/api/cities'))
      cities.list()
      .then(cities => {
        this.cities = cities.list
      })
    },

    methods: {
      cleanItems() {
        this.items.forEach(obj => {
          obj.loading = false 
          obj.disabled = false
        })
      },

      getBillboardDetail(item) {
        const billboard = this.items.find(i => i.id === item.id)
        const data = {data: JSON.stringify(billboard)}
        this.items.forEach(obj => {
          if (obj.id === item.id) {
            obj.loading = true
          } else {
            obj.disabled = true
          }
        })
        axios.post('/api/billboard-detail', data)
        .then((response) => { 
          const str = response.data.slice(157);
          const linkSource = `data:application/octet-stream;base64,${str}`;
          const downloadLink = document.createElement("a");
          const fileName = "detalle.pdf";

          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
          this.cleanItems();
        })
        .catch((error) => {
          this.cleanItems();
        })
      },

      allData() {
        this.search = ''
        this.state = ''
        this.city = ''
        this.pagination.page = 1
        this.getDataFromApi().then(data =>{
          this.items = data.items
        })
      },

      filterState(s) {
        this.search = ''
        this.state = s
        this.pagination.page = 1
        this.getDataFromApi().then(data =>{
          this.items = data.items
        })
      },

      filterCity(c) {
        this.search = ''
        this.city = c
        this.pagination.page = 1
        this.getDataFromApi().then(data =>{
          this.items = data.items
        })
      },

      filterData() {
        this.pagination.page = 1
        this.getDataFromApi().then(data =>{
          this.items = data.items
        })
      },

      getDataFromApi() {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page } = this.pagination
          axios.get(this.buildURL())
          .then((response) => {
            this.totalItems = response.data.params.total
            const a = response.data.espacios.data
            const items = a.map(obj => {
              const rObj = {}
              rObj['id'] = obj.Id_espacio
              rObj['city'] = obj.Ciudad
              rObj['zone'] = obj.Zona
              rObj['location'] = obj.Ubicacion
              rObj['type'] = obj.Tipo
              rObj['dimension'] = obj.Dimension
              rObj['code'] = obj.Cod_espacio
              rObj['state'] = obj.Estado
              rObj['image'] = obj.Url
              rObj['uuid'] = obj.uuid
              rObj['price'] = obj.Costo
              rObj['reserved'] = false
              rObj['loading'] = false
              rObj['disabled'] = false

              if (this.getBillboard.length > 0) {
                this.getBillboard.forEach(o => {
                  if (o.Id == obj.Id_espacio) {
                    rObj.reserved = true
                  }
                })
              }
              return rObj
            })
            resolve({
              items
            })
            this.loading = false
          })
        })
      },

      buildURL() {
        let page = `?page=${this.pagination.page}`
        let rowsPerPage = `&rowsPerPage=${this.pagination.rowsPerPage}`
        let filter = this.search === '' ? '' : `&filter=${this.search}`
        let state = this.state === '' ? '' : `&state=${this.state}`
        let city = this.city === '' ? '' : `&city=${this.city}`
        return `api/billboards${page}${rowsPerPage}${filter}${state}${city}`
      }
    }
  }
</script>
