<template>
  <div id="header">
    <img src="../../assets/Logotype.svg" alt="D-Coin logo" />
    <button>Connect</button>
    <img src="../../assets/layers.svg" alt="layers" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style>
@import "../stylesheets/config.css";
@import "../../node_modules/bulma/bulma.sass";

#header {
  background-color: var(--dapps-color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  height: 7vh;
}

#header button {
  border-style: none;
  border-radius: 5px;
  background-color: var(--dapps-color-dark);
  padding: 3%;
  color: var(--dapps-color-white);
  font-weight: bold;
  transition: all 300ms ease;
}

#header button:hover {
  background-color: var(--dapps-color-primary);
  transition: all 300ms ease;
}
</style>
