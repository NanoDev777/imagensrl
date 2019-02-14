<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <modal-delete :loader="loader" :dialog="dialog" @hide="hide" @deleted="deleted"></modal-delete>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Lista General De Usuarios</h3>
          </v-card-title>
          <v-container fluid>
            <v-layout>
              <v-flex xs12 sm12 md12 lg12>
                <v-card>
                  <v-card-title>
                    <v-btn 
                      dark color="grey darken-1" 
                      slot="activator" 
                      class="mb-2"
                      to="users/create"
                    >
                      <v-icon dark>note_add</v-icon>
                    </v-btn>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      @keypress.enter.prevent="filterData"
                      append-icon="search"
                      label="Buscar"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>
                  <v-data-table
                    :headers="headers"
                    :items="items"
                    :pagination.sync="pagination"
                    :total-items="totalItems"
                    :loading="loading"
                    class="elevation-1"
                  >
                    <v-progress-linear height="2" slot="progress" color="error" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                      <td>{{ props.item.name }}</td>
                      <td>{{ props.item.email }}</td>
                      <td>
                        <v-chip label outline color="green" v-if="props.item.state === 1">Activo</v-chip>
                        <v-chip label outline color="red" v-else>Inactivo</v-chip>
                      </td>
                      <td>
                        <span class="body-2" v-if="props.item.profile === 1">Administrador</span>
                        <span class="body-2" v-else-if="props.item.profile === 2">Cliente</span>
                        <span class="body-2" v-else>Agencia</span>
                      </td>
                      <td>{{ props.item.created_at | formatDate('DD/MM/YYYY') }}</td>
                      <td>
                        <v-btn 
                          icon class="mx-0"
                          :to="{ name: 'EditUser', params: { id: props.item.id }}"
                        >
                          <v-icon color="teal">edit</v-icon>
                        </v-btn>
                        <v-btn 
                          icon class="mx-0" 
                          @click="showModal(props.item.id)"
                        >
                          <v-icon color="pink">delete</v-icon>
                        </v-btn>
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import permission from '../../mixins/permission'
  import ModalDelete from '../../components/ModalDelete.vue'

  export default {
    name: 'list-users',
    data () {
      return {
        search: '',
        dialog: false,
        loader: false,
        loading: false,
        headers: [
          { text: 'Nombre', value: 'nombre' },
          { text: 'Correo', value: 'correo' },
          { text: 'Estado', value: 'estado' },
          { text: 'Perfil', value: 'perfil' },
          { text: 'Registrado', value: 'registrado' },
          { text: 'Acciones', value: 'acciones' }
        ],
        items: [],
        totalItems: 0,
        pagination: {
          rowsPerPage: 10
        }
      }
    },

    components: {
      'modal-delete' : ModalDelete
    },

    // mixins: [permission],

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

    methods: {
      showModal(id) {
        this.dialog = true
        this.id = id
      },

      hide() {
        this.dialog = false
      },

      deleted() {
        this.loader = true
        axios.delete(`/api/user/${this.id}`)
        .then((response) => {
          this.loader = false
          this.dialog = false
          this.$snotify.simple(response.data.message, 'Felicidades')
          this.getDataFromApi().then(data =>{
            this.items = data.items
          })
        })
        .catch((error) => {
          this.loader = false
          this.dialog = false
        })
      },

      filterData() {
        this.getDataFromApi().then(data => {
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
            let items = response.data.users.data
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
        return `api/users${page}${rowsPerPage}${filter}`
      }
    }
  }
</script>
