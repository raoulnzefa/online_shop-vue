<template>
  <div class="card-item">
    <img
      class="card-item__img"
      :src="require(`../assets/images/${this.cardItemData.image}`)"
      alt="product"
    />
    <div class="card-item__info">
      <p>{{ cardItemData.name }}</p>
      <p>{{ cardItemData.price }}</p>
      <p>{{ cardItemData.article }}</p>
    </div>
    <div class="card-item__quantity">
        <p>Quantity:</p>
        {{cardItemData.quantity}}
    </div>
    <button @click="deleteFromCard">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    cardItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  methods: {
      deleteFromCard() {
          this.$emit('deleteFromCard')
      }
  },
  // mounted() {
  //   this.$set(this.cardItemData, 'quantity', 1)
  // }
};
</script>

<style lang="scss">
.card-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px #e0e0e0;
  padding: 15px;
  margin-bottom: 10px;
  &__img {
    max-width: 50px;
  }
}
</style>