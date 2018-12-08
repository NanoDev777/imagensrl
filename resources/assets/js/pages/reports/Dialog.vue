<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
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
        loading: false
      }
    },

    methods: {
      toggleDialog () {
        this.$emit('toggleDialog')
      },

      listBillboardFiltered() {
        this.loading = true
        axios.get(this.url)
        .then((response) => { 
          const str = response.data.slice(157);
          const linkSource = `data:application/octet-stream;base64,${str}`;
          const downloadLink = document.createElement("a");
          const fileName = "reporte.pdf";
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