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
        <!-- En caso de que sea una denuncia -->
        <div v-if="report.audio_url" class="card-container">
          <!-- Título del reporte -->
          <h2 class="text-left"></h2>
          <br>
          <!-- Botón para ver más detalles -->
          <Button class="details-button">Ver más detalles</Button>
        </div>
        <!-- En caso de que sea un reporte -->
        <div v-else class="card-container">
          <!-- Título del reporte -->
          <h2 class="text-left">{{ `${report.title} en ${report.address}` }}</h2>
          <br>
          <!-- Botón para ver más detalles -->
          <Button class="details-button" @clicked="showReportDetails(report)">Ver más detalles</Button>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from "../components/Button";
<<<<<<< HEAD
import { mapGetters } from 'vuex'
import { SIGN_IN_ADMIN_SUCCESS } from "../../store/actions/auth";
=======
import ReportServices from "../../services/ReportsServices";
>>>>>>> 24794441d975e46526f8764f7057ea9dac92c09e

export default {
  components: {
    Button
  },
  data() {
    return {
<<<<<<< HEAD
      reports: [
        {
          _id: 1
        }
      ]
    }
  },
  methods:{
    beforeRouteEnter(to, from, next){
      if(this.$store.state.SIGN_IN_ADMIN_SUCCESS ){
        next()
      } else {
        next('/')
      }
    }
=======
      reports: []
    };
  },
  mounted: async function() {
    const coordinates = await this.$getLocation();

    this.reports = await ReportServices.getReports(
      coordinates.lat,
      coordinates.lng
    );
<<<<<<< HEAD
  },
  methods: {
    showReportDetails: function(report) {
      this.$router.push({
        name: "ReportDetails",
        params: { id: report._id }
      });
    }
=======
>>>>>>> 24794441d975e46526f8764f7057ea9dac92c09e
>>>>>>> 3d5a0449719a8d17e49b20d02574afb17dd7d6b9
  }
}
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
  margin-left: 1vh;
  margin-right: 1vh;
}

.details-button {
  margin: 0;
}
</style>