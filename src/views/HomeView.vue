<template>
  <div class="home-mobile-tablet">
    <Header class="mobile-component"></Header>
    <div>
      <ScrollHorizontal class="mobile-component"></ScrollHorizontal>
      <Table class="mobile-component"></Table>
    </div>
    <Footer class="mobile-component"></Footer>
  </div>
  <div id="home-desktop">
    <main class="desktop-component">
      <ScrollHorizontal class="desktop-component"></ScrollHorizontal>
      <Table class="desktop-component"></Table>
    </main>
    <aside class="desktop-component">
      <Graph class="desktop-component"></Graph>
      <Exchange class="desktop-component"></Exchange>
    </aside>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollHorizontal from "@/components/Scroll-Horizontal.vue";
import Table from "@/components/Table.vue";
import Graph from "@/components/Graph.vue";
import Fomo from "@/components/Fomo.vue";
import Exchange from "@/components/Exchange.vue";

export default {
  name: "HomeView",

  components: {
    /*eslint-disable*/
    Header,
    Footer,
    ScrollHorizontal,
    Table,
    Graph,
    Fomo,
    Exchange
},
};
</script>
<style>
@import url('../stylesheets/config.css');

.desktop-component {
  display: none;
}

.home-mobile-tablet > div {
  overflow-x: hidden;
}

@media screen and (min-width: 1000px) {

  .mobile-component, #header, #footer,.home-mobile-tablet > div  {
    display: none;
  }

  .desktop-component {
    display: block;
  }

  #home-desktop {
    display: flex;
    height: 100vh;
    flex-wrap: wrap;
    flex-direction: columns;
  }

  main.desktop-component {
    width: 70%;
  }

  aside.desktop-component {
    margin: 2% 0;
    width: 30%;
    height: 10%;
  }

}
</style>