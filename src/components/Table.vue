<template>
  <div class="table">
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="../../assets/v-logo.svg"
      name="Carritos,com...."
      index="ETH"
      volume="$119,61K"
    ></row>
  </div>
</template>
<script>
import Row from "@/components/Row.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Table",
  components: {
    Row,
  },
};
</script>
<style>
table {
  margin: 0;
}

.table {
  height: 57.2vh;
  width: 100vw;
  overflow-x: hidden;
}

.table .row {
  width: 97%;
}

@media screen and (min-width: 500px) {
  .table {
    height: 52.8vh;
  }
}

@media screen and (min-width: 1000px) {
  .table {
    width: 100%;
  }
}
</style>
