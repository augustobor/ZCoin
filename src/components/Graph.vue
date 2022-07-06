<template>
  <div id="graph">
    <img
      src="../../assets/exchange-icon.svg"
      class="exchange-icon"
      alt="exchange icon"
    />
    <h1>Uniswap V3</h1>
    <div class="graph-container">
      <h2>Network:</h2>
      <h3>ETH</h3>
    </div>
    <h2>Stadistics</h2>
    <img src="../../assets/graph.svg" class="graph" alt="graph" />
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: "Graph",
};
</script>
<style>
@import "../stylesheets/config.css";

h1, h3 {
  color: var(--dapps-color-white);
}

h2 {
  color: var(--dapps-color-primary);
  font-weight: bolder;
}

.graph-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 1% 25%;
  margin-bottom: 0.4rem;
}

.exchange-icon {
  margin-top: 1rem;
}

.graph {
  width: 320px;
}

@media screen and (min-width: 500px) {
  .graph {
    width: 60%;
  }
  .graph-container {
    justify-content: center;
  }
}

@media screen and (min-width: 1000px) {
  .graph-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 1% 25%;
    margin-bottom: 0.4rem;
  }

  .graph {
    src: url('../../assets/graph-desktop.svg');
    width: 340px;
  }
}
</style>
