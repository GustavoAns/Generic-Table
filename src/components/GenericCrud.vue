<template>
  <v-app >
    <div :style="{borderStyle: 'solid', borderColor: 'red', display: 'flex', padding: '25px' }">
      <template v-for="obj in searchables" >
        <TableFilters :searchableObj="obj" v-bind:key="obj.value" v-on:inputTest="updateSearchables($event)"/>
      </template>
    </div>
    <div :style="{borderStyle: 'solid', borderColor: 'blue'}">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      >
      <!-- btn edit -->
        <template v-slot:[`item.edit`]="{ item }">
          <v-row justify="space-around">
            <v-col cols="auto">
              <v-dialog
                transition="dialog-bottom-transition"
                max-width="600"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    @click="log2(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="primary"
                      dark
                    >
                      Editando:
                    </v-toolbar>
                    <v-card-text>
                      <v-text-field v-model="item[editables[1]]" label="text" prepend-icon="mdi-calendar-edit-outline" />
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        text
                        @click="dialog.value = false"
                      >Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </template>
      <!-- btn edit -->
      </v-data-table>
    </div>
    <button @click="log" >log</button>
  </v-app>
</template>

<script>
export default {
  props: {
    builder: Array,
    allItens: Array
  },
  data() {
    return {
      headers: [],
      items: [],
      searchables: [],
      editables: [],
      search: '',
      input: null
    }
  },
  methods: {
    log() {
      console.log(this.editables)
    },
    log2(a) {
      console.log(a)
    },
    updateSearchables(searchObj) {
      let list = [...this.searchables]
      const objIndex = list.findIndex((obj => obj.value == searchObj.value))
      list[objIndex].input = searchObj.input
      this.searchables = list
    }
  },
  watch: {
    searchables() {
      let listItens = [...this.allItens]
      let filter = {}
      let dateFilter = {}
      // let dateArry = []
      for (let i in this.searchables) {
        if (this.searchables[i].input != "" && this.searchables[i].type != 'date') {
          filter[this.searchables[i].value] = this.searchables[i].input
        } else if (this.searchables[i].type == 'date' && this.searchables[i].input.length != 0) {
          let dataInput1 = new Date(this.searchables[i].input[0])
          let dataInput2 = new Date(this.searchables[i].input[1])
          // console.log(this.searchables[i].input.length);
            console.log(this.searchables[i].input)
          if (this.searchables[i].input.length > 1 && this.searchables[i].input[1] != null) {
            if (dataInput1 > dataInput2) {
              dateFilter = { [this.searchables[i].value] : { isRange: true, data1:dataInput2, data2:dataInput1 }}
            }
            dateFilter = { [this.searchables[i].value] : { isRange: true, data1:dataInput1, data2:dataInput2 } }
          } else {
            dateFilter = { [this.searchables[i].value] : { isRange: false, data1:dataInput1 } }
          }
        }
      }
      listItens = listItens.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || !item[key].toString().toLowerCase().includes(filter[key].toString().toLowerCase()) || filter[key] == "")
            return false
        }
        return true
      })

      if (!Object.keys(dateFilter).length == 0) {

        listItens = listItens.filter(function(item) {
          for (var key in dateFilter) {
            let data1 = new Date(dateFilter[key].data1)
            let itemData = new Date(item[key])
            if (dateFilter[key].isRange) {
              
              let data2 = new Date(dateFilter[key].data2)
 
              if (!(data1 <= itemData && itemData <= data2)) {

                return false
              }

            } else {
              if (!(data1.toString() === itemData.toString())) {
                return false
              }
            }
          }
          return true
        })
      } 
      this.items = listItens
    }
  },
  created() {
    let newHeaders = []
    let searchables = []
    let editables = []
    this.builder.forEach((e) => {
      if (e.indexable) {
        newHeaders.push({ text: e.view, value: e.value })
      }
      if (e.searchable) {
        searchables.push({ text: e.view, value: e.value, type: e.type, input: '' })
      }
      if (e.editable) {
        editables.push(e.value)
      }
    })
    newHeaders.push({ text: 'Editar', value: 'edit' })
    this.headers = newHeaders
    this.searchables = searchables
    return this.editables = editables
  }
}
</script>

<style>

</style>

        <!-- <v-card>
          <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="allItens"
            :search="search"
          ></v-data-table>
        </v-card> -->