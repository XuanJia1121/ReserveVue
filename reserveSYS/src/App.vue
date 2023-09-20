<script setup lang="ts">

import { RouterView } from 'vue-router'
import { useMainStore } from '@/stores/counter'
import { showAlert , toLogin , toHome } from '@/hook/Base'

const piniaStore = useMainStore();

function logOut() {
  piniaStore.logOut();
  let alertObj = {
    icon: 'info',
    title: '登出',
    text: '系統以登出'
  }
  showAlert(alertObj)
  toLogin();
}

</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar app color="blue">
      <!-- Replace this with your custom app bar content -->
      <v-toolbar-title>My Vue Project</v-toolbar-title>
      <v-toolbar-items v-if="piniaStore.showBarBtn" class="mr-4">
        <v-btn>選單1</v-btn>
        <v-btn>選單2</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="piniaStore.showBarBtn" class="ml-4">
        <v-btn v-if="!piniaStore.isLogin" @click="toLogin()">登入</v-btn>
        <v-btn v-else @click="logOut()">登出</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else class="ml-4">
        <v-btn @click="toHome()">首頁</v-btn>
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
