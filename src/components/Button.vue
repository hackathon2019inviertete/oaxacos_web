<template>
  <v-btn round color="#EE964B" dark large id="button">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {};
</script>
<style>
#button {
  box-shadow: 0px 0px 0px 0px;
  min-height: 6vh;
  outline: none;
  margin: none;
}
</style>

