<template>
  <Header></Header>
  <div class="fomo-view-container">
    <Fomo></Fomo>
    <SocialData></SocialData>
  </div>
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

.fomo-view-container {
  height: 68;
  overflow-x: hidden;
}

@media screen and (min-width: 500px) {
  .fomo-view-container {
    height: 67vh;
  }
}
</style>
