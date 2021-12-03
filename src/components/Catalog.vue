<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
        @sendArticle="showChildArcticle"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue"
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Catalog",
  components: {
    CatalogItem,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildArcticle(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if(response.data) {
        console.log('Data array!')
      }
    })
  }
};
</script>

<style lang="scss">
  .catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-right: -10px;
      margin-left: -10px;
    }
  }
</style>