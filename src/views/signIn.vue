<template>
  <v-container fluid fill-height pa-0>
    <v-layout align-center>
      <v-flex xs1 sm1 md3 text-xs-center>
        <div class="left" align-center></div>
      </v-flex>
      <v-flex xs12 sm12 md6 text-xs-center>
        <div class="center" align-center>
          <v-container align-center fluid fill-height pa-0>
            <v-layout>
              <v-flex xs1 sm1 md1 text-xs-center>
                <div class="left" align-center></div>
              </v-flex>
              <v-flex align-center xs12 sm10 md10 text-xs-center>
                <div class="center" align-center>
                  <v-card align-center style="background-color: #F4D35E">
                    <br>
                    <br>
                    <h2 class="display-2 font-weight-light mb-3 text-xs-center">Iniciar sesión</h2>
                    <h3 class="flex body-2 font-weight-light">
                      ¡Bienvenidx de vuelta!
                      <br>Ingresa para así tener acceso a todas tus herrramientas.
                    </h3>
                    <v-container align-center fluid fill-height pa-0>
                      <v-layout align-center>
                        <v-flex xs1 sm1 md1 text-xs-center>
                          <div class="left" align-center></div>
                        </v-flex>
                        <v-flex xs12 sm10 md10 align-center text-xs-center>
                          <div class="center" align-center>
                            <form>
                              <v-text-field v-model="email" label="E-mail" required color="#FFFFFF"></v-text-field>
                              <v-text-field 
                              v-model="password" 
                              label="Contraseña" 
                              required color="#FFFFFF"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              :append-icon="show1 ? 'visibility' : 'visibility_off'"
                              ></v-text-field>
                              <v-btn @click="signIn" depressed id="signin-btn">Iniciar</v-btn>
                            </form>
                          </div>
                        </v-flex>
                        <v-flex xs1 sm1 md1 text-xs-center>
                          <div class="right" align-center></div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <br>
                    <br>
                  </v-card>
                </div>
              </v-flex>
              <v-flex xs1 sm1 md1 text-xs-center>
                <div class="right" align-center></div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
      <v-flex xs1 sm1 md3 text-xs-center>
        <div class="right" align-center></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { SIGN_IN_ADMIN_REQUEST } from "../../store/actions/auth";

export default {
  data() {
    return {
      show1: false,
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: async function() {
      const admin = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch(SIGN_IN_ADMIN_REQUEST, admin)
        this.$router.push({ name: 'Reports' })
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
#signin {
  background-color: #f4d35e;
}
#signin-btn{
  color:#f4d35e;
}
.left {
  width: 100%;
  height: 100%;
}
.center {
  width: 100%;
  height: 100%;
}
.right {
  width: 100%;
  height: 100%;
}
</style>

