<template>
  <Header></Header>
  <div class="exchange-view-container">
    <Graph></Graph>
    <Exchange></Exchange>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Graph from "@/components/Graph.vue";
import Exchange from "@/components/Exchange.vue";

export default {
  name: "ExchangeView",

  /*eslint-disable*/
  components: {
    Footer,
    Header,
    Graph,
    Exchange
},
};
</script>
<style>
.exchange-view-container {
  overflow-x: hidden;
  height: 79vh;
}
</style>
