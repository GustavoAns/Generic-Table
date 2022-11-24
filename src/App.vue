<template>
  <v-app>
    <h1>GenericCrud</h1>
    <GenericCrud :builder="builder" :allItens="allItens"/>
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
    editable: true
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
    userName: 'Ans',
    userWork: 'Dev',
    userWorkTime: 1,
    userCadasterDate: '2022-11-09'
  },
  {
    userId: 2,
    userName: 'Fonts',
    userWork: 'Gamer',
    userWorkTime: 2,
    userCadasterDate: '2022-11-10'
  },
  {
    userId: 3,
    userName: 'Gusta',
    userWork: 'Garoto de Prog',
    userWorkTime: 3,
    userCadasterDate: '2022-11-11'
  },
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