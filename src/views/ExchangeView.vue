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
@import url('../stylesheets/config.css');

.exchange-view-container {
  height: var(--height-overflow);
  overflow-x: hidden;
}

@media screen and (min-width: 500px) {
  .exchange-view-container {
    height: var(--height-overflow-tablet);
  }
}

</style>
