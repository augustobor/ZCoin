<template>
  <div class="scroll-horizontal-card">
    <article>
      <img :src="this.logo" :alt="this.index" />
      <div>
        <h3>{{ this.name }}</h3>
        <p>{{ this.desc }}</p>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "Scroll-Horizontal-Card",
  props: {
    logo: String,
    index: String,
    name: String,
    desc: String,
  },
};
</script>
<style>
@import "../stylesheets/config.css";

.scroll-horizontal-card {
  background-color: var(--dapps-color-semi-light);
  margin: 3%;
  width: 55vw;
  padding: 6%;
  border-radius: 10px;
  align-self: center;
}

.scroll-horizontal-card > article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.scroll-horizontal-card h3 {
  font-size: x-large;
  color: var(--dapps-color-primary);
  padding: 1%;
}

.scroll-horizontal-card p {
  font-size: large;
  font-weight: bold;
  color: var(--dapps-color-dark);
}
</style>
