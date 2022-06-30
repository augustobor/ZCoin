<template>
  <div id="footer">
    <router-link to="/">
      <img src="../../assets/layers.svg" alt="layers" />
    </router-link>
    <router-link to="/exchange">
      <img src="../../assets/exchange.svg" alt="exchange" />
    </router-link>
    <router-link to="/">
      <img src="../../assets/statics.svg" alt="statics" />
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style>
@import "../stylesheets/config.css";
@import "../../node_modules/bulma/bulma.sass";

#footer {
  background-color: var(--dapps-color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1%;
  height: 7vh;
}

#footer router-link {
  border-style: none;
  border-radius: 5px;
  background-color: transparent;
  border-radius: 50%;
}

#footer router-link:hover {
  background-color: var(--dapps-color-extra);
  transition: all 500ms ease;
}
</style>
