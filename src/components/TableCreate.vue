<template>
  <v-flex align-self-center="true" :style="{ display: 'flex-box', alignItems: 'center', margin: '25px' }">
    <v-text-field :rules="inputsRules" v-model="input" :label="text" prepend-icon="mdi-calendar-edit-outline" v-if="type == 'text'" />
    <v-text-field
      :rules="inputsRules"
      type="number"   
      step="any"
      min="0"
      v-model="input"
      :label="text"
      prepend-icon="mdi-format-list-numbered"
      v-else-if="type == 'number'"
    ></v-text-field>
    <template v-else-if="type == 'date'">
      <span>{{text}}</span>
      <v-menu max-width="290" >
        <template v-slot:activator="{ on }">
          <v-text-field :rules="inputsRules" :value="input" :label="text" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="input"></v-date-picker>
      </v-menu>
    </template>
  </v-flex>
</template>

<script>
export default {
  props: {
    createInputsObj: Object,
    creating: Object
  },
  data() {
    return {
      text: this.createInputsObj.text,
      value: this.createInputsObj.value,
      type: this.createInputsObj.type,
      input: this.creating[this.createInputsObj.value],
      inputsRules: [
        v => v != undefined && v.toString().length > 0 || 'Campo necessário'
      ]
    }
  },
  methods: {
    log() {
      console.log(this.input)
    },
    numberRule: val => {
      if(val < 0) return 'Please enter a positive number'
      return true
    },
  },
  watch: {
    input() {
      return this.$emit('tableCreate', { value: this.value ,input: this.input })
    },
  }
}
</script>

<style>

</style>