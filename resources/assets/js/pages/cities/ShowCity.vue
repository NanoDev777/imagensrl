<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap v-show="success">
      <v-flex d-flex xs12 sm12 md12>
        <v-data-iterator
          content-tag="v-layout"
          row
          wrap
          :items="spaces"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          rows-per-page-text="Items por página"
        >
          <v-flex
            slot="item"
            slot-scope="props"
            xs12
            sm6
            md4
            lg3
          >
            <v-card>
              <v-card-media :src="'https://www.siscoimagen.com/assets/images/uploads/'+props.item.Imagen_1" height="200px">
              </v-card-media>
              <v-card-title>
                <h5 class="headline mb-0">{{ props.item.Cod_espacio }}</h5>
              </v-card-title>
              <v-list two-line subheader>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Zona:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ props.item.Zona }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Tipo de valla:</v-list-tile-title>
                    <v-list-tile-sub-title>{{ props.item.Tipo }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-menu
                offset-x
                :close-on-content-click="false"
                :nudge-width="200"
              >
                <v-btn flat slot="activator">Detalles</v-btn>
                <v-card>
                  <v-list two-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Ubicación:</v-list-tile-title>
                        <v-list-tile-sub-title>{{ props.item.Ubicacion }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Dimensión:</v-list-tile-title>
                        <v-list-tile-sub-title>{{ props.item.Dimension }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Iluminación:</v-list-tile-title>
                        <v-list-tile-sub-title>{{ props.item.Iluminacion }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-menu>
              <v-btn flat color="red"><v-icon color="grey lighten-1">get_app</v-icon></v-btn>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ["slug"],
    data() {
      return {
        success: false,
        rowsPerPageItems: [4, 8, 12],
        pagination: {
          rowsPerPage: 4
        },
        spaces: []
      }
    },

    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },

    created() {
      const url = `/api/detalle/${this.currentUser.client_id}/${this.slug}`;
      axios.get(url)
      .then( response => {
        console.log(response)
        this.spaces = response.data.data
        this.success = true
      })
      .catch( error => {
        console.log(error)
      })
    }
  }
</script>
