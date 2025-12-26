<script setup lang="ts">
  const dialog = shallowRef(false)
  const shoppingcartStore = useShoppingcartStore();
  const shoppingCart = computed(() => {
    return shoppingcartStore.products;
  }) 

  function deleteProduct(id: number) {
    //shoppingCart.value = shoppingCart.value.filter((prod, i) => i != index)
    shoppingcartStore.removeProduct(id);
  }

  function sendWhatsapp() {
    const phone = '573170793578';
    const listaProductos = shoppingcartStore.products.map(p => `- ${p.quantity} ${p.name}`).join('\n');
    const message = 'Hola, deseo comprar los siguientes productos:\n' + listaProductos;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    dialog.value = false
  }
</script>
<template>
  <v-app-bar color="black">
    <template v-slot:prepend>
      <nuxt-link class="ms-2" to="/">
        <v-img src="~/assets/logo/logo-white.png" width="50"></v-img>
      </nuxt-link>
    </template>
    <v-app-bar-title class="text-h6 ms-0">
      <nuxt-link to="/" style="text-decoration: none; color: white;">
        <span class="ms-1">CY Sport</span> 
      </nuxt-link> 
    </v-app-bar-title>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-badge location="top right" :offset-x="25" :offset-y="10" color="primary" :content="shoppingCart.length">
          <v-btn class="me-4" icon v-bind="activatorProps">
            <v-icon icon="mdi:mdi-shopping-outline"/>
          </v-btn>
        </v-badge>
      </template>
      <v-card>
        <v-toolbar style="background-color: black; color: white;">
          <v-btn
            icon="fas fa-times"
            @click="dialog = false"
          ></v-btn>

          <v-toolbar-title>Carrito</v-toolbar-title>

          <v-toolbar-items>
            <v-btn
              text="Comprar"
              variant="text"
              append-icon="fab fa-whatsapp"
              @click="sendWhatsapp"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list lines="two" height="100%">
          <v-list-subheader>
            <h2>Productos</h2>
          </v-list-subheader>
          <v-container class="pa-0 ma-0 mt-4 mb-8">
            <v-row v-for="(product, i) in shoppingCart">
              <v-col class="pt-5" cols="6" lg="2">
                <v-list-item
                  :subtitle="formatCurrency(product.price, 'COP', 'es-CO')"
                  :title="product.name"
                  :key="i"
                >
                  <span>Cantidad: {{ product.quantity }}</span><br />
                  <v-btn 
                    class="pa-0 text-red" 
                    text="Eliminar" 
                    variant="text"
                    append-icon="far fa-trash-alt"
                    @click="deleteProduct(product.id)"
                  >
                  </v-btn>
                </v-list-item>
              </v-col>
              <v-col class="justify-center" cols="6" lg="1">
                <v-card class="ma-auto" variant="tonal" width="150">
                  <v-img
                    class="product-img"
                    :src="`${product.image}`"
                    cover
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-list-subheader>
            <h2>Totales</h2>
          </v-list-subheader>
          <v-container class="pa-0 ma-6 mt-4 mb-8">
            <p>
              Productos totales: <strong> {{ shoppingcartStore.totalQuantity }} </strong>
            </p>
            <p>
              Total compra: <strong> {{ formatCurrency(shoppingcartStore.totaAmount, 'COP', 'es-CO') }} </strong>
            </p>
          </v-container>
        </v-list>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>