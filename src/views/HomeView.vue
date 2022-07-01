<template>
  <div class="home">
    <Header></Header>
    <ScrollHorizontal></ScrollHorizontal>
    <Table></Table>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollHorizontal from "@/components/Scroll-Horizontal.vue";
import Table from "@/components/Table.vue";

export default {
  name: "HomeView",

  components: {
    /*eslint-disable*/
    Header,
    Footer,
    ScrollHorizontal,
    Table,
  },
};
</script>
<style>
</style>