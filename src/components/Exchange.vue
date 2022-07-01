<template>
  <form action="">
    <h2>Calculate</h2>
    <label for="">
      ETH <input type="number" placeholder="0.32" v-model="unit" />
    </label>
    <img src="../../assets/switch.svg" class="switch-blue" alt="switch logo" />
    <label for="">
      USD
      <input type="number" disabled="all" placeholder="32" v-model="amount" />
    </label>
    <a id="exchangeButton" @click="exchange()">
      <p>SWAP</p>
      <img src="../../assets/switch-white.svg" alt="switch logo" />
    </a>
  </form>
</template>
<script>
/*eslint-disable*/
export default {
  name: "Exchange",
  data () {
    return {
      unit: null
    }
  },
  computed: {
    amount () {
      return this.unit? this.unit*100 : null
    }
  },
  methods: {
    exchange() {
      this.unit = null
    }
  }
};
</script>
<style>
@import "../stylesheets/config.css";

form {
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
}

form > h2 {
  margin-bottom: 1rem;
}

label {
  color: var(--dapps-color-primary);
  font-weight: bold;
}

input {
  background-color: transparent;
  border-style: solid;
  border-color: var(--dapps-color-primary);
  border-radius: 10px;
  height: 2.5rem;
  width: 50vw;
  margin-left: 1rem;
  margin-right: 2rem;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: var(--dapps-color-primary);
  font-size: x-large;
}

input::placeholder {
  font-weight: bold;
  color: var(--dapps-color-secondary);
  font-size: x-large;
}

.switch-blue {
  margin: 2% 47%;
  width: 10%;
  height: 10%;
}

#exchangeButton {
  padding: 2%;
  border-radius: 10px;
  background-color: var(--dapps-color-secondary);
  color: var(--dapps-color-white);
  font-weight: bold;
  font-size: large;
  margin: 10% 30%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
}

#exchangeButton:hover {
  background-color: var(--dapps-color-primary);
  transition: all 300ms ease;
}

#exchangeButton:active {
  background-color: var(--dapps-color-semi-light);
}

</style>
