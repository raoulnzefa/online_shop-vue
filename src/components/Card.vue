<template>
    <div class="card">
      <router-link :to="{name: 'Catalog'}">
        <div class="catalog-link-to-card">Back to catalog</div>
      </router-link>
        <h1>CARD</h1>
        <p v-if="!cardData.length">There are no products in card...</p>
        <card-item 
          v-for="(item, index) in cardData"
          :key="item.article"
          :cardItemData="item"
          @deleteFromCard="deleteFromCard(index)"
        />
    </div>
</template>

<script>
import CardItem from './CardItem.vue'
import {mapActions} from 'vuex'

export default {
  name: 'Card',
  components: {
    CardItem,
  },
  props: {
    cardData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CARD'
    ]),
    deleteFromCard(index) {
      this.DELETE_FROM_CARD(index)
    }
  }
}
</script>