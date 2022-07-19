<template>
  <div id="header">
    <img src="../../assets/Logotype.svg" alt="D-Coin logo" />
    <div>
      <button>Connect</button>
      <img src="../../assets/layers.svg" alt="layers" />
    </div>
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 6%;
  height: 80px;
}

#header button {
  border-style: none;
  border-radius: 5px;
  background-color: var(--dapps-color-dark);
  padding: 4%;
  margin-right: 2rem;
  color: var(--dapps-color-white);
  font-weight: bold;
  transition: all 300ms ease;
}

#header > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#header button:hover {
  background-color: var(--dapps-color-primary);
  transition: all 300ms ease;
}

@media screen and (min-width: 500px) {
  #header button {
    width: 8rem;
    padding: 5%;
    margin-right: 4rem;
    transform: scale(1.4);
  }

  #header img {
    transform: scale(1.5);
  }
}
</style>
