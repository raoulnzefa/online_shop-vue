<template>
  <div class="catalog-item">

    <div class="catalog-container">
      <div class="catalog-container__images">
        <img :src="productPhoto.image" alt="product" class="catalog-container__images--item">
      </div>

      <div class="catalog-container__body">
        <p class="catalog-container__name">{{productData.name}}</p>
        <p class="catalog-container__price">Price: {{productData.price}} UAH</p>
        <button 
          class="catalog-container__btn primary-btn" 
          @click="addToCard">
            Add to card
        </button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToCard() {
      this.$emit('addToCard' ,this.productData)
    }
  },
  computed: {
    productPhoto() {
      return {
        ...this.productData,
        image: this.productData.image && require(`../assets/images/${this.productData.image}`)
      }
    }
  },
  mounted() {
    this.$set(this.productData, 'quantity', 1)
  }
}
</script>

<style lang="scss">
  .catalog-item {
    display: flex;
    padding: 0 10px;
    flex-basis: 25%;
    margin-bottom: 20px;
  }
  .catalog-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    box-shadow: 0 0 4px 0 #e0e0e0;
    border-radius: 4px;
    &__body {
      margin-top: 20px;
    }
    &__name{}
    &__price{}
    &__btn{}
    &__images {}
    &__images--item {
      width: 100%;
      height: 100%;
    }
  }
  
</style>