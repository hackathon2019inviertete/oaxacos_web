<template>
  <!-- Contenedor principal -->
  <v-container fluid fill-height pa-0>
    <!-- Layout -->
    <v-layout>
      <!-- Contenido del lado izquierdo -->
      <v-flex xs6>
        <div class="left">
          <v-img src="ok"/>
          <!-- Logo de Oaxacaos -->
          <p>Oaxacaos es un proyecto de tránsito del estado de Oaxaca desarrollado en una Hackathon.</p>
        </div>
      </v-flex>
      <!-- Contenido del lado derecho -->
      <v-flex>
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
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
};
</script>
<style>
.left {
  background-color: red;
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
</style>
