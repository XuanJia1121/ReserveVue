<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import useRouter from '../src/router/index'

function toLogin() { 
  useRouter.push('/login');
}

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar app color="blue">
      <!-- Replace this with your custom app bar content -->
      <v-toolbar-title>My Vue Project</v-toolbar-title>
      <v-toolbar-items class="mr-4">
        <v-btn>選單1</v-btn>
        <v-btn>選單2</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="ml-4">
        <v-btn @click="toLogin()">登入</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center w-100">
      <v-container style="width: 1200px;">
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Vuetify footer -->
    <v-footer app>
      <!-- Replace this with your custom footer content -->
      <span>&copy;2023 My Vuetify App</span>
    </v-footer>
  </v-layout>
</template>

<style scoped></style>
