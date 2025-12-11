<script setup>
  const linksFooter = [
    { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/cysport.col/'},
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/cysport_col/'}
  ]
  const dialog = shallowRef(false)
  const notifications = shallowRef(false)
  const sound = shallowRef(true)
  const widgets = shallowRef(false)

  const shoppingCart = ref([
    {
      name: 'Conjunto 1',
      price: 45.000
    },
    {
      name: 'Conjunto 2',
      price: 45.000
    },
    {
      name: 'Conjunto 3',
      price: 45.000
    }
  ])

  function deleteProduct(index) {
    shoppingCart.value = shoppingCart.value.filter((prod, i) => i != index)
  }
</script>
<template>
  <v-responsive class="border rounded">
    <v-app>
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
                  @click="dialog = false"
                ></v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-list lines="two" height="100%">
              <v-list-subheader>Productos</v-list-subheader>
              <v-container class="pa-0 ma-0">
              <v-row v-for="(product, i) in shoppingCart">
                <v-col class="pt-5" cols="6" lg="2">
                  <v-list-item
                    :subtitle="'$ ' + product.price"
                    :title="product.name"
                    :key="i"
                  >
                    <v-btn 
                      class="pa-0 text-red" 
                      text="Eliminar" 
                      variant="text"
                      append-icon="far fa-trash-alt"
                      @click="deleteProduct(i)"
                    >
                    </v-btn>
                  </v-list-item>
                </v-col>
                <v-col class="justify-center" cols="6" lg="1">
                  <v-card class="ma-auto" variant="tonal" width="150">
                    <v-img
                      class="product-img"
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      cover
                    ></v-img>
                  </v-card>
                </v-col>
              </v-row>
              </v-container>
            </v-list>
          </v-card>
        </v-dialog>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
      <v-footer class="text-center d-flex flex-column ga-2 py-4" color="black">
        <div class="d-flex ga-3">
          <a
            v-for="element in linksFooter" 
            :href="element.link" 
            target="_blank">
            <v-btn
              :key="element.icon"
              density="comfortable"
              variant="text"
              class="text-white"
            >
              <v-icon :icon="element.icon" />
            </v-btn>
          </a>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div class="text-caption font-weight-regular opacity-60">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div>
          {{ new Date().getFullYear() }} <strong>&copy; CY Sport</strong>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>