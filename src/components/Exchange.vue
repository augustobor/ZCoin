<template>
  <div id="exchange">
    <form action="">
      <h2>Calculate</h2>
      <label for="">
        ETH <input type="number" placeholder="0.32" v-model="unit" />
      </label>
      <img
        src="../../assets/switch.svg"
        class="switch-blue"
        alt="switch logo"
      />
      <label for="">
        USD
        <input type="number" disabled="all" placeholder="32" v-model="amount" />
      </label>
      <a id="exchangeButton" @click="exchange()">
        <p>SWAP</p>
        <img src="../../assets/switch-white.svg" alt="switch logo" />
      </a>
    </form>
  </div>
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
  margin-top: 2.5rem;
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
  border-radius: var(--border-radious-units);
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
  margin: 0.3rem 47%;
  width: 2rem;
  height: 2rem;
}

#exchangeButton {
  padding: 4%;
  border-radius:  var(--border-radious-units);
  background-color: var(--dapps-color-secondary);
  color: var(--dapps-color-white);
  font-weight: bold;
  font-size: large;
  margin: 2rem 4.5rem;
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

@media screen and (min-width: 500px) {
  form {
    margin-top: 0rem;
  }
  input { 
    width: 20vw;
    font-size: x-large;
  }
  #exchangeButton {
    margin: 2% 32%;
    width: 30vw;
  }
}

@media screen and (min-width: 1000px) {

label {
  font-size: xx-large;
}

input {
  width: 10vw;
  margin-left: 1.5rem;
}

.switch-blue {
  margin: 0.3rem 52%;
  width: 2rem;
  height: 2rem;
}

#exchangeButton {
  width: 10vw;
  font-size: large;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
}
</style>
