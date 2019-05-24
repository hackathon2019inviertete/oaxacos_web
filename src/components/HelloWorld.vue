<template>
  <v-container grid-list-xl text-xs-center fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm6 md6 lg6 xl6>
        <img :src="require('../assets/oaxacaos.png')" id="logo" > 
        <br>
        <br>
        <h1 class="font-weight-medium text-xs-left" style="font-size: 60hv" >Lorem ipsum dolor sit amet consectetur</h1>
        <h3 class="text-xs-left font-weight-light" id="f-text">Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, <b style="color:#EE964B">nam ad ipsum posidonium mediocritatem</b>, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.</h3>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 xl6>
        <img id="transit" src="https://images.unsplash.com/photo-1556806805-a620cc7f32f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" style="width: 90vh"> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
     
    })
  }
</script>

<style>
template{
  background-color: #F5F5F5;
}
#logo{
  width: 30vh;
}
#transit{
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.479),0 8.5px 25px 0 rgba(0,0,0,0.16);
  border-radius: 1vh;
}
v-flex{
  align-self: center;
}
</style>
