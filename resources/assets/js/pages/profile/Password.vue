<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">Actualizar Contraseña</h3>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md5 lg5>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Contraseña Actual *"
                      data-vv-name="pass"
                      min="6"
                      v-validate="'required|min:6|max:100'"
                      v-model="user.pass"
                      :error-messages="errors.collect('pass')"
                      hint="Debe tener un mínimo de 6 caracteres"
                      prepend-icon="lock"
                      :append-icon="isPassVisible ? 'visibility' : 'visibility_off'"
                      @click:append="isPassVisible = !isPassVisible"
                      :type="isPassVisible ? 'text' : 'password'"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      ref="password"
                      name="password"
                      label="Nueva Contraseña *"
                      data-vv-name="password"
                      min="6"
                      v-validate="'required|min:6|max:100'"
                      v-model="user.password"
                      :error-messages="errors.collect('password')"
                      hint="Debe tener un mínimo de 6 caracteres"
                      prepend-icon="lock"
                      :append-icon="isPasswordVisible ? 'visibility' : 'visibility_off'"
                      @click:append="isPasswordVisible = !isPasswordVisible"
                      :type="isPasswordVisible ? 'text' : 'password'"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Confirmación de contraseña *"
                      data-vv-name="password_confirmation"
                      target= "password"
                      v-validate="'required|confirmed:password'"
                      v-model="user.password_confirmation"
                      :error-messages="errors.collect('password_confirmation')"
                      prepend-icon="lock"
                      :append-icon="isPasswordVisible2 ? 'visibility' : 'visibility_off'"
                      @click:append="isPasswordVisible2 = !isPasswordVisible2"
                      :type="isPasswordVisible2 ? 'text' : 'password'"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <small>Los campos con (*) son obligatorios.</small>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :disabled="loading" :to="`/profile/${id}/edit`">
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
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    name: 'password',
    data() {
      return {
        user: {
          pass: '',
          password: '',
          password_confirmation: ''
        },
        success: false,
        loading: false,
        id: this.$route.params.id,
        isPassVisible: false,
        isPasswordVisible: false,
        isPasswordVisible2: false,
        dictionary: {
          custom: {
            pass: {
              required: () => 'La contraseña no puede estar vacía',
              max: 'El campo de contraseña no puede tener más de 100 caracteres',
              min: 'El campo de contraseña no puede tener menos de 6 caracteres'
            },
            password: {
              required: () => 'La contraseña no puede estar vacía',
              max: 'El campo de contraseña no puede tener más de 100 caracteres',
              min: 'El campo de contraseña no puede tener menos de 6 caracteres'
            },
            password_confirmation: {
              required: () => 'La confirmación de la contraseña no puede estar vacía',
              confirmed: 'La confirmación de contraseña no coincide'
            }
          }
        }
      }
    },

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.loading = true
            axios.put(`/api/password/${this.id}`, this.user)
            .then(response => {
              if(response.data.success) {
                this.$snotify.success(response.data.message, 'Felicidades')
              } else if (!response.data.success) {
                this.$snotify.warning('La contraseña actual no es correcta.', 'Alerta')              }
              this.loading = false
            })
            .catch(error =>{
              this.loading = false
            })
          }
        })
      }
    } 
  }
</script>

