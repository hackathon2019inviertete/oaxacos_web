<template>
  <!-- Contenedor principal -->
  <v-container>
    <v-layout row wrap>
      <!-- Flex para el título -->
      <v-flex xs12>
        <h1 class="text-xs-center">Reportes cerca de ti</h1>
      </v-flex>
      <!-- Flex para los reportes -->
      <v-flex v-for="report in reports" :key="report._id" xs12>
        <!-- Contenedor de la tarjeta -->
        <div class="card-container">
          <!-- Título del reporte -->
          <h2 class="text-left">Accidente en Perú 218</h2>
          <br>
          <!-- Botón para ver más detalles -->
          <Button class="details-button">Ver más detalles</Button>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from "../components/Button";

export default {
  components: {
    Button
  },
  data() {
    return {
      reports: [
        {
          _id: 1
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-container {
  background-color: white;
  min-height: 15vh;
  box-shadow: 0px 6px 20px rgb(197, 197, 197);
  padding-top: 4vh;
  padding-bottom: 4vh;
  padding-left: 4vh;
  padding-right: 4vh;
  margin-top: 5vh;
  margin-left: 10vh;
  margin-right: 10vh;
}

.details-button {
  margin: 0;
}
</style>