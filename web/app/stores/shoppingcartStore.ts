import { defineStore } from 'pinia'
import type { Product } from './productStore'

interface ShoppingcartState {
  products: Product[];
}

export const useShoppingcartStore = defineStore('shoppingcart', {
  state: (): ShoppingcartState => ({
    products: [],
  }),

  getters: {
    totalProducts: (state): number => state.products.length,
  },

  actions: {
    addProduct(newProduct: Product) {
      this.products.push(newProduct);
    },

    removeProduct(id: number) {
      console.log('entra remove');
      
      this.products = this.products.filter((p) => p.id != id);
    },
  }
})