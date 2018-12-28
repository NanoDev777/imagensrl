<template>
  <v-toolbar
    color="red darken-1" fixed clipped-left app
    app
    :clipped-left="clipped"
  >
    <v-toolbar-side-icon dark @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-btn dark icon @click.stop="toggleMiniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    
    <v-menu
      offset-y
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="300"
      bottom
    >
      <v-btn slot="activator" dark icon @click="getAlerts">
        <v-icon>notifications</v-icon>
        <v-badge
          v-if="getAlert > 0"
          color="grey darken-1"
        >
          <span slot="badge">{{ getAlert }}</span>
        </v-badge>
      </v-btn>

      <v-card>
        <div class="pa-3 text-xs-center" v-show="loader">
          <v-progress-circular
            indeterminate
            color="red"
          ></v-progress-circular>
        </div>
        <v-list two-line v-if="items.length > 0">
          <v-subheader>
            <div>
              <span>Alertas</span>
              <br><span class="caption mb-0">Vallas con alquiler a punto de finalizar.</span>
            </div>
          </v-subheader>
          <template v-for="(item, index) in items">
            <v-divider></v-divider>
            <v-list-tile
              :key="item.location"
              avatar
              ripple
              @click="redirectCity(item.slug)" 
            >
              <v-list-tile-avatar>
                <img :src="'https://www.siscoimagen.com/assets/images/uploads/'+item.image">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.city"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.location"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <div class="text-xs-center">
            <v-btn flat small color="error" router to="/alert" >Ver todas</v-btn>
          </div>
        </v-list>
        <div class="pa-3 text-xs-center" v-if="empty">
          <span>No tiene alertas en este momento!</span>
        </div>
      </v-card>
    </v-menu>

    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text" v-if="currentUser" v-text="currentUser.name"></v-toolbar-title>
    <v-menu offset-y>
      <v-btn dark icon slot="activator"><v-icon>menu</v-icon></v-btn>
      <v-list>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Cerrar sesión
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'apptoolbar',

    props: {
      drawer: {
        type: Boolean,
        required: true
      },
      miniVariant: {
        type: Boolean,
        required: true
      }
    },

    data () {
      return {
        clipped: false,
        loader: false,
        menu: false,
        flat: false,
        empty: false,
        items: []
      }
    },

    computed: {
      ...mapGetters([
        'currentUser',
        'getAlert'
      ])
    },

    methods: {
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push({ name: 'login' })
      },

      toggleDrawer () {
        this.$emit('toggleDrawer')
      },

      toggleMiniVariant () {
        this.$emit('toggleMiniVariant')
      },

      redirectCity (slug) {
        this.$router.push({name: 'ShowCity', params: {slug:slug}})
      },

      getAlerts() {
        if (!this.flat) {
          this.items = []
          this.loader = true
          axios.get(`/api/alerts?client=${this.currentUser.client_id}&filter=true`)
          .then((response) => {
            if (response.status === 200) {
              this.flat = true
              if (response.data.length > 0) {
                this.items = response.data
              } else {
                this.empty = true
              }
            }
            this.loader = false
          })
        }
      }
    }
  }
</script>

<style scoped>
  >>>.v-badge__badge {
    top: -20px;
    right: -15px;
  }
</style>