<script setup>
  const linksFooter = [
    { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/cysport.col/'},
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/cysport_col/'}
  ]
</script>
<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar color="black">
        <v-app-bar-title class="text-h6 ms-3">
          <v-icon icon="mdi:mdi-apps"></v-icon>

          <span class="ms-1">CY Sport</span>
        </v-app-bar-title>
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
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>