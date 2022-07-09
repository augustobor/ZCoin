<template>
  <tr class="row">
    <div class="img">
      <img src="../../assets/star.svg" alt="star logo" />
      <img :src="this.icon" alt="icon" />
    </div>
    <div>
      <h3 id="name">{{ this.name }}</h3>
      <p>{{ this.index }}</p>
    </div>
    <h3 id="name">{{ this.volume }}</h3>
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  transition: all 100ms ease;
}

.row > div {
  text-align: left;
  width: 30%;
}

.row .img {
}

.row #name {
  color: var(--dapps-color-white);
  text-align: left;
}

.row p {
  color: var(--dapps-color-primary);
  font-weight: bold;
}

.row:hover {
  background-color: var(--dapps-color-semi-light);
  transition: all 100ms ease;
}

@media screen and (min-width: 500px) {
  .row {
    justify-content: space-evenly;
    align-items: center;
  }

  .row > img {
    width: 8%;
    height: 8%;
  }

  .row h3 {
    font-size: xx-large;
  }

  .row p {
    font-size: x-large;
  }
}

@media screen and (min-width: 1000px) {
  .row {
    margin: 2% 0%;
  }

  .row h3 {
    font-size: x-large;
  }

  .row p {
    font-size: large;
  }

  .row > img {
    width: 4%;
    height: 4%;
  }

  .row:hover {
    background-color: var(--dapps-color-semi-light);
    transition: all 100ms ease;
  }
}
</style>
