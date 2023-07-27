<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

const items = [
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
];

</script>

<template>
  <v-app>
    <!-- Vuetify navigation drawer -->
    <v-navigation-drawer app>
      <!-- Replace this with your custom navigation drawer content -->
      <v-card class="mx-auto" max-width="300">
        <v-list density="compact">
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <!-- Vuetify app bar -->
    <v-app-bar app color="blue">
      <!-- Replace this with your custom app bar content -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Vuetify App</v-toolbar-title>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <v-container>
        <!-- Replace this with your main content -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Vuetify footer -->
    <v-footer app>
      <!-- Replace this with your custom footer content -->
      <span>&copy;2023 My Vuetify App</span>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
