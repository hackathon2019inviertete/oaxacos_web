<template>
  <v-btn @click="buttonClicked" round color="#EE964B" dark large id="button">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
<<<<<<< HEAD
    methods: {
    buttonClicked () {
      this.$emit('clicked')
    }
=======
  methods: {
    buttonClicked () {
    this.$emit('clicked')
>>>>>>> 5d189ab35d2226f6b12f69cea6d3686cda572d69
  }
 }
};
</script>
<style>
#button {
  box-shadow: 0px 0px 0px 0px;
  min-height: 6vh;
  outline: none;
  margin: none;
}
</style>

