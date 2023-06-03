<template>
  <v-card width="2000" class="mx-auto mt-5">
    <v-card-title>
      <h1>Filtro</h1>
    </v-card-title>

    <v-card-text>
      <v-form>
        <v-text-field label="Pesquisar" 
        hint="Digite uma palavra pela qual filtrar" 
        prepend-icon="mdi-magnify"></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn>Remover Filtros</v-btn>
      <v-btn color="blue" >Filtrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>
