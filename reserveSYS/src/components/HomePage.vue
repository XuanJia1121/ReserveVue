<script setup lang="ts">

import { onMounted } from 'vue';
import Cookies from 'js-cookie';
import { toHome } from '@/hook/Base'
import { useMainStore } from '@/stores/counter'

const piniaStore = useMainStore();

onMounted(()=> {
    const token = Cookies.get('jwtToken');
    if (token) {
        piniaStore.loginSuc(token);
        alert('hello' + Cookies.get('googleName'));
    }
})

</script>

<template>
    <div class="d-flex align-center justify-center">
        <v-container style="width: 1200px;">
            <v-row no-gutters>
                <v-col v-for="n in 24" :key="n" cols="12" xs="12" sm="12" md="6" xl="4">
                    <v-card style="height: 200px;" class="text-center mt-5">
                        <template v-slot:title>
                            This is a title
                        </template>

                        <template v-slot:subtitle>
                            This is a subtitle
                        </template>

                        <template v-slot:text>
                            This is content
                        </template>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped></style>
