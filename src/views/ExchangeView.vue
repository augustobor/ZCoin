<template>
  <Header></Header>
  <Graph></Graph>
  <Exchange></Exchange>
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
<style></style>
