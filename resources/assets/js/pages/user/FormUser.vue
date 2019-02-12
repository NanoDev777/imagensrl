<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex d-flex xs12 sm12 md12>
        <v-card v-show="success">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ addSubtitle }}</h3>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md5 lg5>
                <v-layout row wrap>
                  <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-select
                      :items="profiles"
                      v-model="user.profile"
                      data-vv-name="profile"
                      v-validate="'required'"
                      :error-messages="errors.collect('profile')"
                      label="Perfil *"
                      item-text="description"
                      item-value="id"
                      single-line
                    ></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row wrap v-if="user.profile == 2">
                  <v-flex xs12 sm12 md12 lg12>
                    <v-autocomplete
                      :items="customers"
                      v-model="user.client_id"
                      data-vv-name="customer"
                      v-validate="'required'"
                      :error-messages="errors.collect('customer')"
                      label="Nombre del cliente asociado *"
                      item-text="Nombre"
                      item-value="Id_cliente"
                      single-line
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Nombre de usuario *"
                      v-model="user.name"
                      data-vv-name="name"
                      v-validate="'required'"
                      :error-messages="errors.collect('name')"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Teléfono / Cel"
                      v-model="user.phone"
                      data-vv-name="phone"
                      v-validate="'max:20'"
                      :error-messages="errors.collect('phone')"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Correo electrónico *"
                      v-model="user.email"
                      data-vv-name="email"
                      v-validate="'required|email|max:30'"
                      :error-messages="errors.collect('email')"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                      label="Dirección"
                      v-model="user.address"
                      data-vv-name="address"
                      v-validate="'max:120'"
                      :error-messages="errors.collect('address')"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-select
                      :items="states"
                      v-model="user.state"
                      data-vv-name="state"
                      v-validate="'required'"
                      :error-messages="errors.collect('state')"
                      label="Estado *"
                      item-text="text"
                      item-value="value"
                      single-line
                    ></v-select>
                  </v-flex>
                </v-layout>
                <div v-if="!id">
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12>
                      <v-text-field
                        ref="password"
                        name="password"
                        label="Contraseña *"
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
                </div>
                <v-layout row wrap>
                  <small>Los campos con (*) son obligatorios.</small>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider class="mt-5"></v-divider>
          <v-card-actions>
            <v-btn :disabled="loading" to="/users">
              Cancelar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="submit" :loading="loading">
              {{ id == null ? 'Registrar' : 'Actualizar' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import User from '../../class/user/User'

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    name: 'form-user',
    data() {
      return {
        user: new User(),
        success: false,
        loading: false,
        profiles: [
          { id: 1, description: 'Administrador' },
          { id: 2, description: 'Cliente' },
          { id: 3, description: 'Agencia' }
        ],
        id: this.$route.params.id,
        isPasswordVisible: false,
        isPasswordVisible2: false,
        states: [
          { text: 'Activo', value: 1},
          { text: 'Inactivo', value: 0}
        ],
        customers: [],
        dictionary: {
          custom: {
            name: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 20 caracteres'
            },
            phone: {
              max: 'Este campo debe tener un máximo de 20 caracteres'
            },
            email: {
              required: () => 'Este campo es requerido',
              max: 'Este campo debe tener un máximo de 30 caracteres',
              email: 'El formato de correo es inválido'
            },
            address: {
              max: 'Este campo debe tener un máximo de 120 caracteres'
            },
            state: {
              required: () => 'Este campo es requerido'
            },
            profile: {
              required: () => 'Este campo es requerido',
            },
            customer: {
              required: () => 'Este campo es requerido',
            },
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

    computed: {
      addSubtitle () {
        if(this.id) {
          return 'Editar Usuario'
        }
        return 'Nuevo Usuario'
      }
    },

    created(){
      axios.get('/api/customers')
      .then(response => {
        if (response.data.success) {
          this.customers = response.data.list
          this.success = true
        }
      })

      if (this.id) {
        this.showUser()
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
            this.user = response.data.data
            this.success = true
          }
        })
      },

      submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.loading = true
            if(this.id) {
              this._save = axios.put(`/api/user/${this.id}`, this.user)
            } else {
              this._save = axios.post('/api/users', this.user)
            }
            this._save
            .then(response => {
              if(response.data.success) {
                this.$router.push('/users')
                this.$snotify.simple(response.data.message, 'Felicidades')
              }
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

