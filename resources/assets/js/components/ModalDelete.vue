<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Eliminar Registro</v-card-title>
      <v-card-text>Realmente desea borrar los datos de este registro?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="hide" :disabled="loader">Cancelar</v-btn>
        <v-btn color="blue darken-1" flat @click.native="deleted" :loading="loader" >Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: {
      dialog: {
        type: Boolean
      },
      loader: {
        type: Boolean
      }
    },

    methods: {
      hide () {
        this.$emit('hide')      
      },

      deleted() {
        this.$emit('deleted')
      }
    }
  }
</script>