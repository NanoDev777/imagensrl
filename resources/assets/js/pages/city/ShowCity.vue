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
          no-data-text="No se encontraron resultados para esta ciudad."
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
              <v-card-media :src="'https://www.siscoimagen.com/assets/images/uploads/'+props.item.image" height="200px">
              </v-card-media>
              <v-card-title>
                <h5 class="headline mb-0">{{ props.item.code }}</h5>
              </v-card-title>
              <v-list two-line subheader>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Fecha de Inicio:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ props.item.start | formatDate('DD/MMM/YYYY') }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Fecha Fin:</v-list-tile-title>
                    <v-list-tile-sub-title>{{ props.item.end | formatDate('DD/MMM/YYYY') }}</v-list-tile-sub-title>
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
                        <v-list-tile-sub-title>{{ props.item.location }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Iluminación:</v-list-tile-title>
                        <v-list-tile-sub-title>{{ props.item.illumination }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Impresión:</v-list-tile-title>
                        <v-list-tile-sub-title>{{ props.item.print }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-menu>
              <v-btn 
                flat 
                color="red"
                @click="getBillboardRented(props.item)"
                :loading="props.item.loading"
                :disabled="props.item.disabled"
              >
                <v-icon color="grey lighten-1">get_app</v-icon>
              </v-btn>
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
        const a = response.data.data
        this.spaces = a.map(obj => {
          const rObj = {}
          rObj['id'] = obj.Id_espacio
          rObj['code'] = obj.Cod_espacio
          rObj['location'] = obj.Ubicacion
          rObj['illumination'] = obj.Iluminacion
          rObj['print'] = obj.Impresion
          rObj['start'] = obj.fecha_inicio
          rObj['end'] = obj.fecha_fin
          rObj['image'] = obj.Url
          rObj['loading'] = false
          rObj['disabled'] = false
          return rObj
        })
        this.success = true
      })
    },

    methods: {
      cleanItems() {
        this.spaces.forEach(obj => {
          obj.loading = false 
          obj.disabled = false
        })
      },

      getBillboardRented(item) {
        this.spaces.forEach(obj => {
          if (obj.id === item.id) {
            obj.loading = true
          } else {
            obj.disabled = true
          }
        })
        axios.get(`/api/rented-billboard?billboard=${item.id}`)
        .then( response => {
          const str = response.data.slice(157);
          const linkSource = `data:application/octet-stream;base64,${str}`;
          const downloadLink = document.createElement("a");
          const fileName = "detalle-valla.pdf";
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
          this.cleanItems();
        })
        .catch((error) => {
          this.cleanItems();
        })
      },
    }
  }
</script>
