<template>
  <v-container fluid grid-list-md id="theme">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <v-card v-show="success">
          <v-card-title primary-title>
            <h3 class="headline mb-0">Editar Datos Del Usuario</h3>
          </v-card-title>
          <v-container fluid>
            <v-layout>
              <v-flex xs12 sm12 md12 lg12>
                <v-card>
                  <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md5 lg5>
                        <v-layout row wrap>
                          <v-flex xs12 sm12 md12 lg12>
                            <v-text-field
                              label="Nombre Usuario*"
                              v-model="form.name"
                              data-vv-name="name"
                              v-validate="'required|max:20'"
                              :error-messages="errors.collect('name')"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs12 sm12 md12 lg12>
                            <v-text-field
                              label="Teléfono / Cel *"
                              v-model="form.phone"
                              data-vv-name="phone"
                              v-validate="'required|max:20'"
                              :error-messages="errors.collect('phone')"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs12 sm12 md12 lg12>
                            <v-text-field
                              label="Correo Electrónico *"
                              v-model="form.email"
                              data-vv-name="email"
                              v-validate="'required|email|max:30'"
                              :error-messages="errors.collect('email')"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs12 sm12 md12 lg12>
                            <v-text-field
                              label="Dirección *"
                              v-model="form.address"
                              data-vv-name="address"
                              v-validate="'required|max:120'"
                              :error-messages="errors.collect('address')"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <small>Los campos con (*) son obligatorios.</small>
                          <v-spacer></v-spacer>
                          <router-link to="password" v-if="id">Cambiar Contraseña</router-link>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-divider class="mt-5"></v-divider>
                  <v-card-actions>
                    <v-btn :disabled="loading" to="/profile">
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
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        success: false,
        loading: false,
        id: this.$route.params.id,
        form: {
          name: '',
          phone: '',
          email: '',
          address: ''
        },
        dictionary: {
          custom: {
            name: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 20 caracteres'
            },
            phone: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 20 caracteres'
            },
            email: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 30 caracteres',
              email: 'El formato de correo es inválido'
            },
            address: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 120 caracteres'
            }
          }
        }
      }
    },

    created() {
      if (this.id) {
        this.showUser()
      }else{
        this.success = true
      }
    },

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      showUser() {
        axios.get(`/api/user/${this.id}`)
        .then(response => {
          if (response.data.success) {
            this.form = response.data.data
          }
          this.success = true
        })
      },

      submit () {
        let vm = this
        vm.$validator.validateAll().then((result) => {
          if (result) {
            vm.loading = true
            axios.put(`/api/user/${vm.id}`, vm.form)
            .then(response => {
              if(response.data.success) {
                vm.$snotify.success(response.data.message, 'Felicidades')
                vm.$store.dispatch('saveUser', response.data.user)
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


