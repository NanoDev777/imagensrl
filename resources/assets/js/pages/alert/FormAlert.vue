<template>
  <v-container fluid grid-list-md id="theme">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <v-card v-show="success">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Editar Días de Alerta</h3>
              <span class="body-1 mb-0">Puede actualizar los días restantes en los que desea recibir la alerta de sus alquileres a punto de finalizar.</span>
            </div>
          </v-card-title>
          <v-container fluid>
            <v-layout>
              <v-flex xs12 sm12 md12 lg12>
                <v-card>

                  <v-card-text>
                    <small>Por defecto recibirá la alerta faltando 1 semana (puede cambiarla en cualquier momento).</small>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md5 lg5>
                        <v-layout row wrap>
                          <v-flex xs12 sm12 md12 lg12>
                            <v-text-field
                              label="Días*"
                              v-model="day"
                              data-vv-name="day"
                              v-validate="'required|numeric|max:3'"
                              @focus ="$event.target.select()"
                              :error-messages="errors.collect('day')"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <small>Los campos con (*) son obligatorios.</small>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-divider class="mt-5"></v-divider>
                  <v-card-actions>
                    <v-btn :disabled="loading" to="/dashboard">
                      Cancelar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="submit" :loading="loading">
                      Actualizar
                    </v-btn>
                  </v-card-actions>
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
  import { mapGetters } from 'vuex'

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        success: false,
        loading: false,
        day: null,
        dictionary: {
          custom: {
            day: {
              required: () => 'Este campo es requerido',
              numeric: 'Este campo solo puede contener números enteros',
              max: 'Este campo debe tener un máximo de 3 caracteres'
            }
          }
        }
      }
    },

    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },

    created() {
      this.showAlert();
    },

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      showAlert() {
        axios.get(`/api/alerts/${this.currentUser.alert.id}`)
        .then(response => {
          if (response.data.success) {
            this.day = response.data.data.day
          }
          this.success = true
        })
      },

      submit () {
        let vm = this
        vm.$validator.validateAll().then((result) => {
          if (result) {
            vm.loading = true
            axios.put(`/api/alerts/${vm.currentUser.alert.id}`, {day: vm.day})
            .then(response => {
              if(response.data.success) {
                vm.$snotify.success(response.data.message, 'Felicidades')
              }
              vm.loading = false
            })
            .catch(error =>{
              vm.loading = false
            })
          }
        })
      }
    }
  }
</script>


