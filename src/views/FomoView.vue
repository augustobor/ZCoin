<template>
  <Header></Header>
  <Fomo></Fomo>
  <SocialData></SocialData>
  <Footer></Footer>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Fomo from "@/components/Fomo.vue";
import SocialData from "@/components/Social-Data.vue";

export default {
  name: "FomoView",
  components: {
    Header,
    Footer,
    Fomo,
    SocialData,
  },
};
</script>
<style>
SocialData {
  margin-bottom: 50rem;
}
</style>
