import { defineStore } from 'pinia'

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  status: number;
  isNewCollection: boolean;
  description: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
}

export const useProductStore = defineStore('products', {
  // 1. Convertimos el state en una función extendida para usar useRuntimeConfig
  state: (): ProductState => {
    const config = useRuntimeConfig()
    const base = config.app.baseURL // Esto obtiene el baseURL definido en nuxt.config.ts

    return {
      products: [
        { 
          id: 1,
          name: 'Chaqueta Beige',
          price: '$45.000',
          // 2. Concatenamos el base URL. 
          // Usamos .replace para asegurar que no haya dobles barras si el base termina en /
          image: `${base}images/1000763415.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva...',
        },
        { 
          id: 2,
          name: 'Chaqueta Café',
          price: '$45.000',
          image: `${base}images/1000763416.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva...',
        },
        { 
          id: 3,
          name: 'Chaqueta Azul',
          price: '$45.000',
          image: `${base}images/1000763453.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 4,
          name: 'Chaqueta Rosa',
          price: '$45.000',
          image: `${base}images/1000763473.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        { 
          id: 5,
          name: 'Chaqueta Negra',
          price: '$45.000',
          image: `${base}images/1000763496.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva Descripcion de la chaqueta deportiva',
        },
        // ... repite el mismo patrón para el resto de productos
        { 
          id: 6,
          name: 'Chaqueta Azul Claro',
          price: '$45.000',
          image: `${base}images/1000763712.jpg`.replace(/\/+/g, '/'),
          category: 'CHAQUETA',
          status: 1,
          isNewCollection: true,
          description: 'Descripcion de la chaqueta deportiva...',
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