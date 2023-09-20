<script setup lang="ts">

import { api_login , toSign , showAlert , showAlertTimeOut } from '../hook/Base';
import UserDto from '@/class/UserDto'
import { reactive, ref } from 'vue';
import { useMainStore } from '@/stores/counter'

const userData = reactive({
    username: '',
    password: ''
});

const piniaStore = useMainStore();

function login() {
    const userDto = new UserDto(userData.username, userData.password, '');
    api_login(userDto).then(success => {
        //login success and set token 
        let token = success.data.token;
        piniaStore.loginSuc(token);
        showAlertTimeOut('登入成功');
    }).catch(err => {
        //login fail 
        console.log(err.response.data);
        let alertObj = {
            icon: 'error',
            title: '登入失敗',
            text: '帳號或密碼錯誤'
        }
        showAlert(alertObj);
    })
}

</script>

<template>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail>
                <v-text-field v-model="userData.username" label="User Name"></v-text-field>
                <v-text-field v-model="userData.password" label="password"></v-text-field>
                <v-btn @click="toSign()" type="button" color="green" block class="mt-2">註冊</v-btn>
                <v-btn @click="login()" type="button" color="blue" block class="mt-2">登入</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<style scoped></style>
