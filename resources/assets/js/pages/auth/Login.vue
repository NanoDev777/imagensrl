<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="grey lighten-2">
              <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
              <v-spacer></v-spacer>
              <img src="/img/img.png" width="180px">
            </v-toolbar>
            <v-card-text @keyup.enter="login">
              <v-alert v-if="alert" type="warning" :value="true"><strong>{{ message }}</strong></v-alert>
              <v-form ref="form" lazy-validation>
                <v-text-field 
                  label="Usuario"
                  prepend-icon="person" 
                  name="username"  
                  type="text"
                  :rules="nameRules"
                  v-model="form.username"
                ></v-text-field>
                <v-text-field 
                  label="Contraseña" 
                  prepend-icon="lock" 
                  name="password" 
                  :counter="30"
                  :append-icon="visible ? 'visibility' : 'visibility_off'"
                  @click:append="visible = !visible"
                  :type="visible ? 'password' : 'text'"
                  :rules="passwordRules"
                  v-model="form.password"
                ></v-text-field>
                <v-checkbox
                  label="Recordarme"
                  color="error"
                  type="checkbox"
                  v-model="remember"
                  value="true"
                ></v-checkbox>
                <v-btn block large color="error" @click="login" :disabled="!busy">
                  <div v-show="busy"><v-icon>input</v-icon> INGRESAR</div>
                  <v-progress-circular v-show="!busy" indeterminate :width="5"></v-progress-circular> 
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        visible: true,
        remember: false,
        busy: true,
        alert: false,
        nameRules: [
          (v) => !!v || 'El usuario es requerido',
          (v) => v && v.length <= 50 || 'usuario debe tener menos de 10 caracteres'
        ],
        passwordRules: [
          (v) => !!v || 'La contraseña es requerida',
          (v) => v && v.length <= 30 || 'contraseña debe tener menos de 30 caracteres'
        ],
        message: ''
      }
    },
    methods: {
      login () {
        let vm = this 
        vm.alert = false
        if (vm.$refs.form.validate()) {
          vm.busy = false
          axios.post('api/login', vm.form)
          .then(({data}) => {
            vm.busy = true
            if (data.status === 200) {
              vm.$store.dispatch('saveToken', data.token)
              vm.$store.dispatch('saveExpiration', data.expires_in + Date.now())
              vm.$store.dispatch('saveUser', data.user)
              vm.$router.push({ name: 'Home' })
            }
          })
          .catch(({response}) => {
            vm.busy = true
            if (response.data.status === 422) {
              vm.alert = true
              vm.message = response.data.message
            }
          })
        }
      }
    }
  }
</script>
