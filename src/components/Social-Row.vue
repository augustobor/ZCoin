<template>
  <div class="row-social">
    <img :src="this.logo" alt="social logo" />
    <div class="bar">
      <p
        class="progress"
        :style="{ width: this.percent ? this.percent * 10 + 'rem' : 0 + 'rem' }"
      >
        .
      </p>
    </div>
    <h3>{{ this.percent ? this.percent * 100 : 0 }}%</h3>
  </div>
</template>
<script>
export default {
  name: "SocialRow",
  props: {
    logo: String,
    percent: Int16Array,
  },
};
</script>
<style>
@import "../stylesheets/config.css";

.row-social {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.row-social h3 {
  color: var(--dapps-color-primary);
  font-weight: bold;
}

.row-social > .bar {
  border-radius: 10px;
  background-color: var(--dapps-color-secondary);
  width: 10rem;
  align-items: center;
  margin-bottom: 2rem;
}

.row-social > .bar > .progress {
  border-radius: 10px;
  background-color: var(--dapps-color-extra);
  color: var(--dapps-color-extra);
}
</style>
