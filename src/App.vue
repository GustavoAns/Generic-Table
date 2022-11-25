<template>
  <v-app>
    <v-toolbar
      color="primary"
      dark
    >
      <h1>GenericCrud:</h1>
    </v-toolbar>
    <GenericCrud :builder="builder" :allItens="allItens" />
  </v-app>
</template>

<script>
const builder = [
  {
    view: 'id',
    value: 'userId',
    type: 'number',
    indexable: false,
    searchable: false,
    editable: false
  },
  {
    view: 'Nome',
    value: 'userName',
    type: 'text',
    indexable: true,
    searchable: true,
    editable: true
  },
  {
    view: 'Trabalho',
    value: 'userWork',
    type: 'text',
    indexable: true,
    searchable: true,
    editable: false
  },
  {
    view: 'Anos de trabalho',
    value: 'userWorkTime',
    type: 'number',
    indexable: true,
    searchable: true,
    editable: true
  },
  {
    view: 'Dia do Cadastro',
    value: 'userCadasterDate',
    type: 'date',
    indexable: true,
    searchable: true,
    editable: true
  },
]

const allItens = [
  {
    userId: 1,
    userName: 'Gustavo Anselmo',
    userWork: 'Dev',
    userWorkTime: 2,
    userCadasterDate: '2022-11-09',
  },
  {
    userId: 2,
    userName: 'Leonardo Fuentes',
    userWork: 'Eletricista',
    userWorkTime: 1,
    userCadasterDate: '2022-11-10',
  },
  {
    userId: 3,
    userName: 'Gustavo Henrique',
    userWork: 'Agricultor',
    userWorkTime: 3,
    userCadasterDate: '2022-11-11',
  },
  {
    userId: 4,
    userName: 'Cristian Fuentes',
    userWork: 'Engenheiro',
    userWorkTime: 5,
    userCadasterDate: '2022-11-12',
  }
]

export default {
  data() {
    return {
      builder,
      allItens
    }
  }
}
</script>

<style>

</style>