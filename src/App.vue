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
    view: 'Salario',
    value: 'userSalario',
    type: 'number',
    indexable: false,
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
    userCadasterDate: '2022-11-09',
    userSalario: 1000
  },
  {
    userId: 2,
    userName: 'Fonts',
    userWork: 'Gamer',
    userWorkTime: 2,
    userCadasterDate: '2022-11-10',
    userSalario: 2000
  },
  {
    userId: 3,
    userName: 'Gusta',
    userWork: 'Garoto de Prog',
    userWorkTime: 3,
    userCadasterDate: '2022-11-11',
    userSalario: 3000
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