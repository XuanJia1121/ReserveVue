<script setup lang="ts">

import { onMounted } from 'vue';
import Cookies from 'js-cookie';
import { useMainStore } from '@/stores/counter'
import { api_products } from '@/hook/Base';

const piniaStore = useMainStore();

onMounted(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
        const username = Cookies.get('googleName');
        piniaStore.loginSuc(token, username);
    }
    //init product
    api_products().then(res => {
        piniaStore.setProducts(res.data);
        console.log("商品初始化成功");
    }).catch(err => {
        console.log("商品初始化失敗" + err);
    })
})

</script>

<template>
    <div class="d-flex align-center justify-center">
        <v-container style="width: 1200px;">
            <v-row no-gutters>
                <v-col v-for="product in piniaStore.products" :key="product" cols="12" xs="12" sm="12" md="6" xl="4">
                    <v-card outlined width="350" class="d-flex justify-center ma-4">
                        <v-card width="350" outlined>
                            <v-card-title>{{product.productName}}</v-card-title>
                            <v-card-subtitle>{{product.description}}</v-card-subtitle>
                            <v-card-text>{{product.price}}</v-card-text>
                            <v-card-actions>
                                <v-btn color="primary">加入購物車</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped></style>
