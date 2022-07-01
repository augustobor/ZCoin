<template>
  <div id="SocialData">
    <h2 class="Social-Data-h2">Social data</h2>
    <Social-Row logo="../../assets/facebook.svg" percent="0.3"></Social-Row>
    <Social-Row
      logo="../../assets/twitter-square.svg"
      percent="0.5"
    ></Social-Row>
    <Social-Row
      logo="../../assets/youtube-square.svg"
      percent="0.2"
    ></Social-Row>
  </div>
</template>
<script>
import SocialRow from "@/components/Social-Row.vue";

export default {
  name: "SocialData",
  /*eslint-default*/
  components: {
    SocialRow,
  },
};
</script>
<style>
@import "../stylesheets/config.css";

.Social-Data-h2 {
  color: var(--dapps-color-extra);
  font-size: xx-large;
  font-weight: normal;
  margin-bottom: 4rem;
}

#SocialData {
  margin-top: 2rem;
  margin-bottom: 7.7rem;
}
</style>
