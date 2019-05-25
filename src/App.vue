<template>
  <v-app>
    <v-toolbar class="custom-toolbar" app flat>
      <router-link :to="{ name: 'home' }">
        <img src="./assets/red.png" alt="Logo de Oaxacaos" width="110vw" id="toolbar-img">
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items v-show="isAuthenticated" class="hidden-sm-and-down">
        <v-btn flat small color="#F95738" id="logOut" @click="signOut">LogOut</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="main-content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { SquareSpinner } from "vue-spinners";
import { mapGetters } from "vuex";
import { AUTH_SIGN_OUT } from "../store/actions/auth";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated"])
  },
  methods: {
    signOut: async function() {
      const result = await this.$store.dispatch(AUTH_SIGN_OUT);

      // Redirigir al usuario
      if (result === true) {
        this.$router.replace({ name: "home" });
      }
    }
  }
};
</script>
<style>
#toolbar-img {
  padding-top: 5vh;
  padding-left: 5vh;
  padding-bottom: 5vh;
}

#logOut {
  border-radius: 50px;
}

.custom-toolbar {
  background-color: white !important;
  border-bottom: 1px solid lightgray;
}
</style>
