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
    totalQuantity: (state): number => state.products.reduce((acc, value) => { return acc + value.quantity! }, 0),
    totaAmount: (state): number => state.products.reduce((acc, value) => { return acc + (value.price * value.quantity!) }, 0),
  },

  actions: {
    addProduct(newProduct: Product) {
      this.products.push(newProduct);
    },

    removeProduct(id: number) {      
      this.products = this.products.filter((p) => p.id != id);
    },
  }, 
  persist: true,
})