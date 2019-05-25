<template>
  <v-app>
    <v-toolbar class="custom-toolbar" app flat>
      <router-link :to="{ name: 'home' }">
        <img src="./assets/red.png" alt="Logo de Oaxacaos" width="110vw" id="toolbar-img">
      </router-link>
    </v-toolbar>
    <v-content class="main-content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
#toolbar-img {
  padding-top: 5vh;
  padding-left: 5vh;
  padding-bottom: 5vh;
}

.custom-toolbar {
  background-color: white !important;
  border-bottom: 1px solid lightgray;
}
</style>
