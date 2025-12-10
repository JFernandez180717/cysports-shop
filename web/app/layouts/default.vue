<script setup>
  const linksFooter = [
    { icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/cysport.col/'},
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/cysport_col/'}
  ]
  const dialog = shallowRef(false)
  const notifications = shallowRef(false)
  const sound = shallowRef(true)
  const widgets = shallowRef(false)
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
            <v-badge location="top right" :offset-x="25" :offset-y="10" color="primary" content="99+">
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

              <v-toolbar-title>Settings</v-toolbar-title>

              <v-toolbar-items>
                <v-btn
                  text="Comprar"
                  variant="text"
                  @click="dialog = false"
                ></v-btn>
              </v-toolbar-items>
            </v-toolbar>

            <v-list lines="two">
              <v-list-subheader>User Controls</v-list-subheader>

              <v-list-item
                subtitle="Set the content filtering level to restrict apps that can be downloaded"
                title="Content filtering"
                link
              ></v-list-item>

              <v-list-item
                subtitle="Require password for purchase or use password to restrict purchase"
                title="Password"
                link
              ></v-list-item>

              <v-divider></v-divider>

              <v-list-subheader>General</v-list-subheader>

              <v-list-item
                subtitle="Notify me about updates to apps or games that I downloaded"
                title="Notifications"
                @click="notifications = !notifications"
              >
                <template v-slot:prepend>
                  <v-list-item-action start>
                    <v-checkbox-btn v-model="notifications" color="primary"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-list-item
                subtitle="Auto-update apps at any time. Data charges may apply"
                title="Sound"
                @click="sound = !sound"
              >
                <template v-slot:prepend>
                  <v-list-item-action start>
                    <v-checkbox-btn v-model="sound" color="primary"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-list-item
                subtitle="Automatically add home screen widgets"
                title="Auto-add widgets"
                @click="widgets = !widgets"
              >
                <template v-slot:prepend>
                  <v-list-item-action start>
                    <v-checkbox-btn v-model="widgets" color="primary"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
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