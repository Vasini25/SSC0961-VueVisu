<template>
    <div>
      <v-btn v-if="!loaded" @click="fetchData()">Buscar Dados</v-btn>
      <!-- Apresentação dos dados após carregados -->
      <div v-if="loaded">
        <span v-for="item in alunos" :key="item.Ordem">
          <v-card class="mx-auto mt-5">
            <v-card-text>
            {{ item.Ordem }} - 
            {{ item.Nome }} - 
            {{ item.Curso }} - 
            {{ item.Programa }} - 
            {{ item.Data }} - 
            {{ item.Orientador }} ]
            </v-card-text>
          </v-card>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 

  export default {
    data() {
      return {
        aluno: undefined,
        alunos: [],
        loading: false,
        loaded: false,
      };
    },
    methods: {
      async fetchData() {
        //let response;
        //this.alunos = 
        await axios.get("http://thanos.icmc.usp.br:4567/api/v1/defesas")
        .then(response => (this.alunos = response.data.items))
        .then(() => {this.loaded = true})
      },
    }
  };
  </script>