<template>
    <div>
      <v-btn @click="fetchData()">Buscar Dados</v-btn>
      <ul v-if="loaded">
        <li v-for="item in alunos" :key="item.Ordem">{{ item.Nome }}</li>
      </ul>
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