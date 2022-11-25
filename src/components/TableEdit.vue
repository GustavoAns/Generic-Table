<template>
  <v-flex align-self-center="true" :style="{ display: 'flex-box', alignItems: 'center', margin: '25px' }">
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
      <v-menu max-width="290" >
        <template v-slot:activator="{ on }">
          <v-text-field :value="input" :label="text" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="input"></v-date-picker>
      </v-menu>
    </template>
  </v-flex>
</template>

<script>
export default {
  props: {
    editablesObj: Object,
    item: Object
  },
  data() {
    return {
      text: this.editablesObj.text,
      value: this.editablesObj.value,
      type: this.editablesObj.type,
      input: this.item[this.editablesObj.value],
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
      console.log(this.input)
      return this.$emit('tableEdit', { value: this.value ,input: this.input })
    },
  }
}
</script>

<style>

</style>