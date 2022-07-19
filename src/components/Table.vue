<template>
  <div class="table">
    <row
      icon="v-logo.svg"
      name="Uniswap V3"
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="metamask-swap.svg"
      name="MetaMask Swap"
      index="ETH"
      volume="$9.23B"
    ></row>
    <row icon="sushi.svg" name="Sushi" index="ETH" volume="$119,61K"></row>
    <row icon="hex.svg" name="HEX" index="ETH" volume="$119,61K"></row>
    <row
      icon="mirandus.svg"
      name="Mirandus"
      index="ETH"
      volume="$119,61K"
    ></row>
    <row icon="curve.svg" name="Curve" index="ETH" volume="$119,61K"></row>
    <row icon="rarible.svg" name="Rarible" index="ETH" volume="$119,61K"></row>
    <row
      icon="1inch.svg"
      name="1inch Network"
      index="ETH"
      volume="$119,61K"
    ></row>
    <row
      icon="shibaswap.svg"
      name="ShibaSwap"
      index="ETH"
      volume="$119,61K"
    ></row>
    <row icon="mirror.svg" name="Mirror" index="ETH" volume="$119,61K"></row>
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
  height: 47vh;
  width: 100vw;
  overflow-x: hidden;
}

.table .row {
  width: 97%;
}

@media screen and (min-width: 1000px) {
  .table {
    height: 68vh;
    width: 100%;
  }

  .table img {
    transform: scale(1.2);
  }
}
</style>
