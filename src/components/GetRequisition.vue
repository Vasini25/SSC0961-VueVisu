<template>
    <div>
      <v-btn v-if="!loaded" @click="fetchData()">Buscar Dados</v-btn>
      <!-- Apresentação dos dados após carregados -->
      <div v-if="loaded">
        <v-btn @click="ordena()">Ordenar</v-btn>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :search="search"
            :items="alunos"
          ></v-data-table>

<!--
  <v-card v-for="item in alunos" :key="item.Ordem" 
        class="mx-auto mt-5" width="1000">
          <v-card-text>
            <h3>
              {{ item.Ordem }} - 
              {{ item.Nome }} -
              {{ item.Curso }} - 
              {{ item.Programa }} - 
              {{ item.Data }} 
              {{ item.Orientador }} 
            </h3>
          </v-card-text>
-->
        </v-card>
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
        loaded: false,
        dados: false,
        search: '',
        headers: [
          {
            text: "Ordem",
            align: "start",
            filterable: true,
            value: "Ordem",
          },
          {
            text: "Nome",
            value: "Nome",
          },
          {
            text: "Data",
            value: "Data",
          },
        ]
      };
    },
    methods: {
      async fetchData() {
        await axios.get("http://thanos.icmc.usp.br:4567/api/v1/defesas")
        .then(response => (this.alunos = response.data.items))
        .then(() => {this.loaded = true})
      },
    }
  };
  </script>