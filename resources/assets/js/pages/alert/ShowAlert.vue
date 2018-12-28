<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card v-show="success">
          <v-toolbar color="grey darken-1" dark>
            <v-icon>date_range</v-icon>
            <v-toolbar-title>Tus Alertas</v-toolbar-title>
          </v-toolbar>
          <v-list three-line v-if="items.length > 0">
            <v-subheader>
              <span>Hoy</span>
            </v-subheader>
            <template v-for="(item, index) in items">
              <v-divider></v-divider>
              <v-list-tile
                :key="item.location"
                avatar
                ripple
                :to="{ name: 'ShowCity', params: { slug: item.slug }}" 
              >
                <v-list-tile-avatar>
                  <img :src="'https://www.siscoimagen.com/assets/images/uploads/'+item.image">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.city"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.location"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>Se vence en:</v-list-tile-action-text>
                  <span class="title">{{ item.day }} Días</span>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
          <div class="pa-3 text-xs-center headline" v-else>
            <span>No tiene alertas en este momento!</span>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        success: false,
        items: []
      }
    },

    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },

    created() {
      this.getAllAlerts();
    },

    methods: {
      getAllAlerts() {
        axios.get(`/api/alerts?client=${this.currentUser.client_id}`)
        .then((response) => {
          if (response.status === 200) {
            this.items = response.data
            this.success = true
          }        
        })
      }
    }
  }
</script>
