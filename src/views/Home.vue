<template>
  <!-- Contenedor principal -->
  <v-container fluid fill-height pa-0>
    <!-- Layout -->
    <v-layout>
      <!-- Contenido del lado izquierdo -->
      <v-flex xs12 md6 text-xs-center>
        <div class="left" align-center>
          <v-img class="oaxacaos-logo" :src="require('@/assets/oaxacaos.png')"/>
          <!-- Logo de Oaxacaos -->
          <p
            class="description text-xs-center"
          >Oaxacaos es un proyecto de tránsito del estado de Oaxaca desarrollado en una Hackathon con el objetivo de que los ciudadanos de Oaxaca puedan reportar fallos en las calles de Oaxaca.</p>
          <!-- Botón para iniciar sesión -->
          <Button class="sign-in-button" @clicked="signIn" >Registrarme</Button>
          <Button class="sign-up-button" @clicked="signUp" >Iniciar sesión</Button>
        </div>
      </v-flex>
      <!-- Contenido del lado derecho -->
      <v-flex hidden-xs-only md6>
        <div class="right">
          <!-- Imagen -->
          <v-img
            class="side-image"
            src="https://images.unsplash.com/photo-1458708606976-4af51a03c931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80"
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from "../components/Button";
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld,
    Button
  },
  data () {
    return {
    }
  },
  methods:{
    signUp(){
      this.$router.push({name:'SignUp'})
    },
    signIn(){
      this.$router.push({name:'SignIn'})
    }
  }
};
</script>
<style>
.left {
  width: 100%;
  height: 100%;
}

.right {
  width: 100%;
  height: 100%;
}

.side-image {
  height: 100%;
}

.oaxacaos-logo {
  margin-top: 15%;
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 5%;
}

.description {
  font-size: 1.2em !important;
  margin-left: 5%;
  margin-right: 5%;
}

.sign-in-button {
  width: 80%;
}

.sign-up-button {
  width: 80%;
  background-color: #083d77 !important;
}
</style>
