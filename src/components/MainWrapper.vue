<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div> 
</template>

<script>

export default {
  name: "MainWrapper",
  components: {
  },

  props: {},
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
.main-wrapper {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>