<script setup>
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
      height="500"
      :show-arrows="false"
      cycle
      hide-delimiter-background
      transition-duration="700" 
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
        Nueva Colección
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
            class="ma-3"
            height="420"
            width="300"
          >
            <v-img
              height="300px"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-img>

            <v-card-title>
              Conjuto 1
            </v-card-title>

            <v-card-subtitle>
              $45.000
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange-lighten-2"
                text="Explore"
              ></v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>

  </v-container>
</template>

<style scoped>
.app-container {
  max-width: 100%;
}
</style>