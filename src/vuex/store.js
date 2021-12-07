import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        card: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CARD: (state, product) => {
            let isProductExists = false;
            state.card.map(function (item) {
                if (item.article === product.article) {
                  isProductExists = true
                  item.quantity++
                }
              })
              isProductExists || state.card.push({ ...product, quantity: 1 })
        },
        REMOVE_FROM_CARD: (state, index) => {
            state.card.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
          return axios('http://localhost:3000/products', {
            method: 'GET'
          })
          .then((products) => {
              commit('SET_PRODUCTS_TO_STATE', products.data);
              return products;
          })
          .catch((error) => {
              console.log(error)
              return error;
          })
        },
        ADD_TO_CARD({commit}, product) {
            commit('SET_CARD', product)
        },
        DELETE_FROM_CARD({commit}, index) {
            commit('REMOVE_FROM_CARD', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CARD(state) {
            return state.card;
        }
    }
});

export default store;