<template>
  <div class="fomo-id">
    <h1 class="fomo">FOMO</h1>
    <img src="../../assets/metric.svg" class="metric" alt="metric" />
  </div>
</template>
<script>
export default {
/*eslint-disable*/
  name: "Fomo",
};
</script>
<style>
@import "../stylesheets/config.css";

.fomo {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    color: var(--dapps-color-primary);
}

.metric {
    width: 90%;
    margin-bottom: 3rem;
}

@media screen and (min-width: 500px) {
  .metric {
    width: 50%;
    height: 50%;
    margin-bottom: 0rem;
  }
}

@media screen and (min-width: 1000px) {
  .fomo {
      display: none;
  }

  .metric {
      width: 70%;
      height: 10vw;
      margin-top: 3rem;
      margin-bottom: 3rem;
  }
}
</style>
