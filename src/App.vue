<template>
  <v-app>
      <CHeader>
        <div class="container" style="margin-left: 10px">
          <v-img src="@/assets/icmc.jpg" alt="logo ICMC" contain height="100px" width="250px">
          </v-img>
        </div>
      </CHeader>
      <!--APLICAÇÃO AQUI-->
      <!--
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
        <v-btn color="blue" >Teste</v-btn>
        <v-btn>teste</v-btn>
      </v-card-actions>
      </v-card>

        <v-app-bar
        app
        color="primary"
        dark
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>

    -->
    <v-main>
      <HelloWorld/>
      <GetRequisition/>
    </v-main>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          ({{ new Date().getFullYear() }}) <strong>SSC0961 - Desenvolvimento Web e Mobile</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import GetRequisition from './components/GetRequisition';

export default {
  name: 'App',

  components: {
    HelloWorld,
    GetRequisition,
  },

  data: () => ({
    //
  }),
};
</script>