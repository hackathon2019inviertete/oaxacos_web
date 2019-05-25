<template>
  <!-- Contenedor principal -->
  <v-container>
    <!-- Layout -->
    <v-layout row wrap fill-height align-center>
      <!-- Título -->
      <v-flex xs12 md6 fill-height align-center>
        <!-- Nombre del reporte -->
        <h3 class="text-xs-center">{{ `${report.title} en ${report.address}` }}</h3>
        <br>
        <!-- Likes -->
        <div class="reports-count-container">
          <v-img
            class="flag-image"
            src="https://static.thenounproject.com/png/1526-200.png"
            width="3vw"
          />
          <p class="text-xs-center">{{(report.likes).length}}</p>
        </div>
        <!-- Estado del reporte -->
        <v-select
          class="select"
          :items="items"
          box
          label="Actualizar estado del reporte"
          v-model="reportStauts"
          v-on:change="updateStatus"
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
import { stat } from "fs";

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
    this.reportStauts = this.items[this.report.report_type];
    console.log(this.reportStauts);
    console.log(this.report.report_type);
  },
  methods: {
    updateStatus: async function(newStatus) {
      let status;

      switch (newStatus) {
        case this.items[0]:
          status = 0;
          break;
        case this.items[1]:
          status = 1;
          break;
        case this.items[2]:
          status = 2;
          break;
      }

      try {
        await ReportsServices.updateReportStatus(this.$route.params.id, status);
      } catch (err) {
        alert(err);
      }
    }
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