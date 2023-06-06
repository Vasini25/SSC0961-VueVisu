<template>
  <v-app>
    <div>
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
      <div class="container" style="margin-left: 10px">
        <v-img src="@/assets/icmc-noBG.png" alt="logo ICMC" contain height="100px" width="250px">
        </v-img>
      </div>
      </v-parallax>
    </div>
  
    <v-main>
      <!--<HelloWorld/>-->
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
//import HelloWorld from './components/HelloWorld';
import GetRequisition from './components/GetRequisition';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    GetRequisition,
  },

  data: () => ({
    //
  }),
};
</script>