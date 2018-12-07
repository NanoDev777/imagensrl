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
            <v-subheader inset>Lista</v-subheader>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">get_app</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { icon: 'description', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'description', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'description', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
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
      }
    }
  }
</script>
