<script setup>
  const model = ref('')

  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]

  const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
  ]
</script>

<template>
  <v-container class="app-container pa-0 ma-0 d-flex flex-column">
    <v-carousel
      height="800"
      :show-arrows="false"
      cycle
      hide-delimiter-background
      :transition-duration="700"
      crossfade
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container class="app-container text-center pt-10">
      <h2>
        NUEVA COLECCIÓN
      </h2>
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            class="ma-3 product-card"
          >
            <v-img
              class="product-img"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-img>

            <v-card-title class="product-title">
              Conjuto 1
            </v-card-title>

            <v-card-subtitle class="product-subtitle">
              $45.000
            </v-card-subtitle>

            <v-card-actions class="product-actions">
              <v-row>
                <v-col class="pt-2 pb-0 ">
                  <v-btn
                    block
                    rounded="lg"
                    size="small"
                    variant="outlined"
                    color="black"
                    text="Comprar"
                    class="btn-actions btn-responsive"
                  ></v-btn>
                </v-col>
                <v-col class="pt-2 pb-0 ">
                  <v-btn
                    block
                    rounded="lg"
                    size="small"
                    variant="flat"
                    color="black"
                    text="Añadir al carrito"
                    class="btn-actions btn-responsive"
                  >
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>

          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>

    <v-container class="app-container text-center pt-10 category-container">
      <h2>
        EXPLORA TODAS NUESTRAS CATEGORÍAS
      </h2>
      <v-row class="mt-8">
        <v-col
          v-for="category in ['CONJUNTOS', 'ENTERIZOS', 'LEGGINS', 'TOPS', 'CHAQUETAS', 'FALDA SHORT']"
          :key="category"
          cols="12"
          sm="6"
          md="4"
          lg="2"
        >
          <nuxt-link to="/product" class="link-category">
            <v-card class="category-card">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                class="align-end category-img"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
              >
                <v-card-title class="text-white">{{ category }}</v-card-title>
              </v-img>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="app-container mt-10">
      <v-row justify="space-evenly">
        <v-col class="text-center pb-8" cols="12" lg="2">
          <v-img class="ma-auto" width="100" src="~/assets/svg/check-shield.svg"></v-img>
          <h3>Calidad y comodidad.</h3>
          <p>Nuestras prendas son elaboradas con tela de alta calidad, ademas te hace sentir libre gracias a su gran comodidad.</p>
        </v-col>
        <v-col class="text-center pb-8" cols="12" lg="2">
          <v-img class="ma-auto" width="100" src="~/assets/svg/shirt.svg"></v-img>
          <h3>Horma excelente.</h3>
          <p>Nuestas prendas estan diseñadas para que se adapten perfectamente a tu cuerpo y luzcas increible.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.app-container {
  max-width: 100%;
}

.link-category {
  text-decoration: none;
}

.btn-actions {
  font-weight: bold;
}

/* Cards de productos en el slide group */
.product-card {
  height: 420px;
  width: 310px;
}

.product-img {
  height: 300px;
}

/* Cards de categorías */
.category-card {
  height: 420px;
  width: 100%;
  max-width: 310px;
  margin: 0 auto;
}

.category-img {
  height: 100%;
}

.category-container {
  padding-left: 4rem;
  padding-right: 4rem;
}

/* Responsive - Tablets */
@media (max-width: 960px) {
  .product-card {
    height: 350px;
    width: 250px;
  }
  
  .product-img {
    height: 230px;
  }
  
  .category-card {
    height: 350px;
    max-width: 250px;
  }
  
  .category-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Responsive - Móviles */
@media (max-width: 600px) {
  .product-card {
    height: 320px;
    width: 200px;
  }
  
  .product-img {
    height: 180px;
  }
  
  .product-title {
    font-size: 0.95rem !important;
    padding: 8px 12px;
  }
  
  .product-subtitle {
    font-size: 0.85rem !important;
    padding: 4px 12px;
  }
  
  .product-actions {
    padding: 8px;
    flex-wrap: wrap;
    gap: 4px;
  }
  
  .btn-responsive {
    font-size: 0.7rem !important;
    padding: 0 8px !important;
  }
  
  .category-card {
    height: 280px;
    max-width: 100%;
  }
  
  .category-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  h2 {
    font-size: 1.3rem;
  }
}

/* Responsive - Móviles pequeños */
@media (max-width: 400px) {
  .product-card {
    height: 280px;
    width: 180px;
  }
  
  .product-img {
    height: 160px;
  }
  
  .category-card {
    height: 250px;
  }
}
</style>