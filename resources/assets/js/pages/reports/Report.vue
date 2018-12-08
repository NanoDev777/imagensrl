<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <v-toolbar color="grey darken-1" dark>
            <v-toolbar-title>Mis Reportes</v-toolbar-title>
            <div>
              <v-btn color="success" @click="getUuid()">Success</v-btn>
              <p v-if="uuid != null">{{ uuid }}</p>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-line subheader>
            <v-subheader inset>Detalles</v-subheader>
            <v-list-tile
              v-for="(item, index) in items"
              :key="item.title"
              avatar
            >
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  title="Descargar presentación"
                  v-if="index === 2"
                  :disabled="item.disabled" 
                  icon 
                  ripple 
                  @click="dialog = !dialog" 
                >
                  <v-icon color="grey lighten-1">get_app</v-icon>
                </v-btn>
                <v-btn 
                  title="Descargar presentación"
                  v-else-if="index === 0"
                  :disabled="item.disabled" 
                  :loading="item.loading" 
                  icon 
                  ripple
                  @click="listBillboardRented(item)" 
                >
                  <v-icon color="grey lighten-1">get_app</v-icon>
                </v-btn>
                <v-btn 
                  title="Descargar presentación"
                  v-else
                  :disabled="item.disabled" 
                  :loading="item.loading" 
                  icon 
                  ripple 
                >
                  <v-icon color="grey lighten-1">get_app</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <modal-parameters v-on:toggleDialog="dialog = !dialog" :dialog="dialog" :url="url"></modal-parameters>
  </v-container>
</template>

<script>
  import Dialog from './Dialog.vue'

  export default {
    components: {
      'modal-parameters' : Dialog
    },
    data() {
      return {
        dialog: false,
        url: '/api/billboard-rented',
        items: [
          { 
            icon: 'description', 
            iconClass: 'grey lighten-1 white--text', 
            title: 'Lista de tus vallas alquiladas', 
            subtitle: 'Ofrece una presentación de todas las vallas que tienes alquiladas a nivel nacional.', 
            loading: false,
            disabled: false
          },
          { 
            icon: 'description', 
            iconClass: 'grey lighten-1 white--text', 
            title: 'Lista general de vallas', 
            subtitle: 'Ofrece una presentación de todas las vallas a nivel nacional, con sus características y estado actual.',
            loading: false,
            disabled: false 
          },
          { 
            icon: 'description', 
            iconClass: 'grey lighten-1 white--text', 
            title: 'Lista de vallas filtradas', 
            subtitle: 'Ofrece una lista específica de vallas filtradas por (Ciudad, Tipo de valla, Ubicación).',
            loading: false,
            disabled: false
          }
        ],
        uuid: null
      }
    },

    created() {
    },

    methods: {
      getUuid() {
        axios.get('/api/uuid')
        .then((response) => {
          this.uuid = response.data
        })
      },

      cleanItems() {
        this.items.forEach(obj => {
          obj.loading = false 
          obj.disabled = false
        })
      },

      listBillboardRented(item) {
        this.items.forEach(obj => {
          if (obj.title === item.title) {
            obj.loading = true
          } else {
            obj.disabled = true
          }
        })
        axios.get(this.url)
        .then((response) => { 
          const str = response.data.slice(157);
          const linkSource = `data:application/octet-stream;base64,${str}`;
          const downloadLink = document.createElement("a");
          const fileName = "reporte.pdf";
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
          this.cleanItems();
        })
        .catch((error) => {
          this.cleanItems();
        })
      }
    }
  }
</script>
