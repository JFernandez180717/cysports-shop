import { defineStore } from 'pinia'

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  status: number;
  isNewCollection: boolean;
  description: string;
  quantity?: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
}

export const useProductStore = defineStore('products', {
  state: (): ProductState => {
    const config = useRuntimeConfig()
    const base = config.app.baseURL

    return {
      products: [
        { 
          id: 1,
          name: 'Chaqueta Beige',
          price: 45000,
          image: `${base}images/1000763415.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 2,
          name: 'Chaqueta Café',
          price: 45000,
          image: `${base}images/1000763416.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva.',
        },
        { 
          id: 3,
          name: 'Chaqueta Azul',
          price: 45000,
          image: `${base}images/1000763453.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 4,
          name: 'Chaqueta Rosa',
          price: 45000,
          image: `${base}images/1000763473.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 5,
          name: 'Chaqueta Negra',
          price: 45000,
          image: `${base}images/1000763496.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 6,
          name: 'Chaqueta Azul Claro',
          price: 45000,
          image: `${base}images/1000763712.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        }
      ],
      loading: false
    }
  },

  getters: {
    totalProducts: (state): number => state.products.length,
  },

  actions: {}
})