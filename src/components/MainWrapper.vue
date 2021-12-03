<template>
  <div class="main-wrapper">
    <catalog />
  </div>
</template>

<script>
import Catalog from './Catalog.vue'

export default {
  name: "MainWrapper",
  components: {
    Catalog,
  },

  props: {},
  data() {
    return {
    };
  },

  computed: {},
  methods: {},
  watch: {},

  mounted() {
    console.log("I`m mounted hook");
  },
};
</script>

<style lang="scss">
.main-wrapper {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>