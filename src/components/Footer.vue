<template>
  <div id="footer">
    <button>
      <img src="../../assets/layers.svg" alt="layers" />
    </button>
    <button>
      <img src="../../assets/exchange.svg" alt="exchange" />
    </button>
    <button>
      <img src="../../assets/statics.svg" alt="statics" />
    </button>
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

#footer button {
  border-style: none;
  border-radius: 5px;
  background-color: transparent;
  border-radius: 50%;
}

#footer button:hover {
  background-color: var(--dapps-color-extra);
  transition: all 500ms ease;
}
</style>
