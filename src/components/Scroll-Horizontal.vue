<template>
  <div class="horizontal-scroll">
    <scroll-horizontal-card
      logo="ether.svg"
      index="Ether Logo"
      name="ETH"
      desc="51 projects"
    ></scroll-horizontal-card>
    <scroll-horizontal-card
      logo="neo.svg"
      index="Neo Logo"
      name="NEO"
      desc="21 projects"
    ></scroll-horizontal-card>
    <scroll-horizontal-card
      logo="rave.svg"
      index="Rave Logo"
      name="Rave"
      desc="18 projects"
    ></scroll-horizontal-card>
    <scroll-horizontal-card
      logo="ppc.svg"
      index="PPC Logo"
      name="PPC"
      desc="4 projects"
    ></scroll-horizontal-card>
    <scroll-horizontal-card
      logo="bbc.svg"
      index="BBC Logo"
      name="BBC"
      desc="43 projects"
    ></scroll-horizontal-card>
  </div>
</template>
<script>
import ScrollHorizontalCard from "@/components/Scroll-Horizontal-Card.vue";

/*eslint-disable*/
export default {
  name: "Scroll-Horizontal",
  components: {
    ScrollHorizontalCard,
  },
};
</script>
<style>
.horizontal-scroll {
    height: 15vh;
    margin: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    overflow-y: hidden; 
    overflow-x: auto;
}

@media screen and (min-width: 1000px) {
  .desktop-component > .horizontal-scroll {
    display: flex;
    flex-wrap: wrap;
    height: 20vh;
  }
}
</style>
