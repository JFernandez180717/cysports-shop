<script setup lang="ts">
  import type { Product } from '@/stores/productStore';
  const route = useRoute();
  const productId = Number(route.params.id);
  const productStore = useProductStore();
  //const product = productStore.products.find((p) => p.id == productId);
  const shoppingCartStore = useShoppingcartStore();
  // Usamos computed para que si el ID de la URL cambia, el producto se actualice
  const product = computed(() => {
    // Aseguramos que sea string y luego convertimos a número
    const idRaw = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
    const idNumber = Number(idRaw);

    const p = productStore.products.find((p) => p.id === idNumber);

    if (isNaN(idNumber) || !product) {
      throw showError({
        statusCode: 404,
        statusMessage: 'Producto no encontrado',
        fatal: true // 'fatal' obliga a que el error se dispare también en el cliente (SPA)
      });
    }

    return p;
  });
  
  
  const quantity = ref(1);

  function addToCart() {
    const productToCart: Product = {
      id: product.value?.id!,
      name: product.value?.name!,
      price: product.value?.price!,
      image: product.value?.image!,
      description: product.value?.description!,
      category: product.value?.category!,
      status: product.value?.status!,
      isNewCollection: product.value?.isNewCollection!,
      quantity: quantity.value,
    };
    shoppingCartStore.addProduct(productToCart);
  }
</script>
<template>
  <v-container class="mt-8 pa-0">
    <v-row>
      <v-col class="px-10" cols="12" lg="6">
        <v-card elevation="0" width="100%">
          <v-img
            :src="`${product!.image}`"
            cover
            width="100%"
          ></v-img>
        </v-card>
      </v-col>
      <v-col class="px-10" cols="12" lg="6">
        <h1>
          {{ product!.name }}
        </h1>
        <span>
          {{ formatCurrency(product!.price, 'COP', 'es-CO') }}
        </span>
        <v-number-input
          v-model="quantity"
          class="mt-4"
          :min="1"
          label="Cantidad"
          control-variant="split"
          inset
          width="180px"
        ></v-number-input>
        <v-row>
          <v-col cols="12" class="pt-2 pb-0 ">
            <v-btn
              block
              rounded="lg"
              size="large"
              variant="outlined"
              color="black"
              text="Comprar"
              class="btn-actions btn-responsive"
            ></v-btn>
          </v-col>
          <v-col cols="12" class="pt-2 pb-0 ">
            <v-btn
              block
              rounded="lg"
              size="large"
              variant="flat"
              color="black"
              text="Añadir al carrito"
              class="btn-actions btn-responsive"
              @click="addToCart"
            >
            </v-btn>
          </v-col>
        </v-row>
        <p class="mt-8 mb-8">
          {{ product!.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>