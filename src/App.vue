<template>
  <v-app>
    <v-toolbar class="custom-toolbar" app transparent color="transparent">
      <router-link :to="{ name: 'home' }">
        <img src="./assets/orange.png" alt="Logo de Oaxacaos" width="110vw" id="toolbar-img">
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
#toolbar-img {
  padding-top: 5vh;
  padding-left: 5vh;
  padding-bottom: 5vh;
}


</style>
