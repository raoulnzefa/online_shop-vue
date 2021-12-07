<template>
  <div class="catalog">
    <router-link :to="{name: 'Card', params: {cardData: CARD}}">
      <div class="catalog-link-to-card">Card: {{CARD.length}}</div>
    </router-link>
    
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
        @addToCard="addToCard"
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
      'PRODUCTS',
      'CARD'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CARD'
    ]),
    addToCard(data) {
      this.ADD_TO_CARD(data)
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
    &-link-to-card {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 15px;
      border: 1px solid #aeaeae;
    }
  }
</style>