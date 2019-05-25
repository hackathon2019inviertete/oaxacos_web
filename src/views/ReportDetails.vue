<template>
  <!-- Contenedor principal -->
  <v-container>
    <!-- Layout -->
    <v-layout row wrap fill-height>
      <!-- Título -->
      <v-flex xs12 md6 fill-height>
        <!-- Nombre del reporte -->
        <h1 class="text-xs-center">report.name</h1>
        <br>
        <!-- Likes -->
        <div class="reports-count-container">
          <v-img
            class="flag-image"
            src="https://static.thenounproject.com/png/1526-200.png"
            width="3vw"
          />
          <p class="text-xs-center">12 reportes</p>
        </div>
        <!-- Estado del reporte -->
        <v-select
          class="select"
          :items="items"
          box
          label="Actualizar estado del reporte"
          v-model="reportStauts"
        ></v-select>
      </v-flex>
      <!-- Mapa -->
      <v-flex xs12 md6 align-center>
        <GmapMap
          :center="{ lat: report.location.coordinates[1] , lng: report.location.coordinates[0] }"
          :zoom="17"
          map-type-id="terrain"
          class="google-map"
        >
          <GmapMarker
            :position="{ lat: report.location.coordinates[1], lng: report.location.coordinates[0] }"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          />
        </GmapMap>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ReportsServices from "../../services/ReportsServices";

export default {
  data() {
    return {
      report: {},
      items: ["Pendiente de revisión", "En revisión", "Solucionado"],
      reportStauts: "Pendiente de revisión"
    };
  },
  mounted: async function() {
    this.report = await ReportsServices.getReport(this.$route.params.id);
    console.log(this.report);
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 80vh;
}

.flag-image {
  margin: 0;
}

.reports-count-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.select {
  margin-right: 3vw;
}
</style>