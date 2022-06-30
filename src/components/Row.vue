<template>
  <tr class="row">
    <img src="../../assets/star.svg" alt="star logo" />
    <img src="../../assets/v-logo.svg" alt="icon logo" />
    <div>
      <h3>{{ this.name }}</h3>
      <p>{{ this.index }}</p>
    </div>
    <h3>{{ this.volume }}</h3>
  </tr>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Row",
  props: {
    icon: String,
    name: String,
    index: String,
    volume: String,
  },
};
</script>
<style>
@import "../stylesheets/config.css";

.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 2%;
  transition: all 100ms ease;
}

.row > div {
  text-align: left;
}

.row h3 {
  color: var(--dapps-color-white);
}

.row p {
  color: var(--dapps-color-primary);
  font-weight: bold;
}

.row:hover {
  background-color: var(--dapps-color-semi-light);
  transition: all 100ms ease;
}
</style>
