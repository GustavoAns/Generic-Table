<template>
  <v-flex xs12 sm6 md3 align-self-center="true" :style="{ display: 'flex-box', alignItems: 'center', margin: '25px' }">
    <v-text-field v-model="input" :label="text" prepend-icon="mdi-calendar-edit-outline" v-if="type == 'text'" />
    <v-text-field
      type="number"   
      step="any"
      min="0"
      :rules="[numberRule]"
      v-model="input"
      :label="text"
      prepend-icon="mdi-format-list-numbered"
      v-else-if="type == 'number'"
    ></v-text-field>
    <template v-else-if="type == 'date'">
      <span>{{text}}</span>
      <div>
        <h6 >Selecionar periodo</h6>
        <input :value="dataCheck"  @click="dataCheck = !dataCheck" type="checkbox"> 
      </div>
      <v-menu max-width="290" >
        <template v-slot:activator="{ on }">
          <v-text-field :value="input" :label="text" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="input"></v-date-picker>
      </v-menu>
      <div v-if="dataCheck == true">
      <span>para</span>
      <v-menu max-width="290" >
        <template v-slot:activator="{ on }">
          <v-text-field :value="inputDate" :label="text" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="inputDate"></v-date-picker>
      </v-menu>
      </div>
    </template>
    <!-- <v-menu v-else-if="type == 'date'">
      <v-text-field :value="input" slot="activator" :label="text" prepend-icon="mdi-camera"/>
      <v-date-picker v-model="input" />
    </v-menu> -->
    <!-- <button @click="log" >log</button> -->
  </v-flex>
</template>

<script>
export default {
  props: {
    searchableObj: Object,
  },
  data() {
    return {
      text: this.searchableObj.text,
      value: this.searchableObj.value,
      type: this.searchableObj.type,
      input: this.searchableObj.input,
      inputDate: null,
      dataCheck: false
    }
  },
  methods: {
    log() {
      console.log(this.input)
    },
    numberRule: val => {
      if(val < 0) return 'Please enter a positive number'
      return true
    }
  },
  watch: {
    input() {
      if (this.type == 'date') {
        if (this.dataCheck) {
          return this.$emit('inputTest', { value: this.value,type: this.type,input: [this.input, this.inputDate]})
        }
        return this.$emit('inputTest', { value: this.value,type: this.type,input: [this.input]})
      }
      return this.$emit('inputTest', { value: this.value,type: this.type,input: this.input })
    },
    inputDate() {
      if (this.dataCheck && this.inputDate != null) {
        return this.$emit('inputTest', { value: this.value,type: this.type,input: [this.input, this.inputDate]})
      } else if (this.dataCheck && this.inputDate == null) {
        return this.$emit('inputTest', { value: this.value,type: this.type,input: [this.input]})
      }
      return this.$emit('inputTest', { value: this.value,type: this.type,input: [this.input]})
    }
  }
}
</script>

<style>

</style>