<template>
  <div id="SocialData">
    <h2 class="Social-Data-h2">Social data</h2>
    <Social-Row logo="facebook.svg" percent="0.3"></Social-Row>
    <Social-Row logo="twitter-square.svg" percent="0.5"></Social-Row>
    <Social-Row logo="youtube-square.svg" percent="0.2"></Social-Row>
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
  margin-bottom: 9rem;
}

@media screen and (min-width: 500px) {
  #SocialData {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
