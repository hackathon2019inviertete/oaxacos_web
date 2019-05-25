<template>
  <v-container fluid fill-height pa-0>
    <v-layout>
      <v-flex xs1 sm1 md3 text-xs-center>
        <div class="left" align-center></div>
      </v-flex>
      <v-flex xs12 sm12 md6 text-xs-center>
        <div class="center" align-center>
          <v-container fluid fill-height pa-0>
            <v-layout>
              <v-flex xs1 sm1 md1 text-xs-center>
                <div class="left" align-center></div>
              </v-flex>
              <v-flex xs12 sm10 md10 text-xs-center>
                <div class="center" align-center>
                  <br>
                  <br>
                  <v-card>
                    <br>
                    <br>
                    <h2 class="display-2 font-weight-light mb-3 text-xs-center">Registrarme</h2>
                    <h3 class="flex body-2 font-weight-light">
                      Crea una cuenta para poder cumplir con tus tareas
                      <br>y construir una mejor comunidad.
                    </h3>
                    <v-container fluid fill-height pa-0>
                      <v-layout>
                        <v-flex xs1 sm1 md1 text-xs-center>
                          <div class="left" align-center></div>
                        </v-flex>
                        <v-flex xs12 sm10 md10 text-xs-center>
                          <div class="center" align-center>
                            <form>
                              <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="Name"
                                required
                                color="#F4D35E"
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="email"
                                :error-messages="emailErrors"
                                label="E-mail"
                                required
                                color="#F4D35E"
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="password"
                                label="Contraseña"
                                required
                                color="#F4D35E"
                                @input="$v.pass.$touch()"
                              ></v-text-field>

                              <v-btn @click="signUp">submit</v-btn>
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
import { SIGN_UP_ADMIN_REQUEST } from "../../store/actions/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: async function() {
      // Generar objeto Administrador
      const admin = {
        name: `${this.name} ${this.lastname}`,
        email: this.email,
        password: this.password
      };

      // Usar vuex para el dispatch
      const signUpResult = await this.$store.dispatch(
        SIGN_UP_ADMIN_REQUEST,
        admin
      );
    }
  }
};
</script>
<style>
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

