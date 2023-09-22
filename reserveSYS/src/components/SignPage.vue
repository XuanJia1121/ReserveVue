<script setup lang="ts">

import { api_sign } from '../hook/Base';
import { ref , reactive } from 'vue';
import UserDto from '@/class/UserDto';
import { showAlert } from '../hook/Base';
import { toLogin } from '../hook/Base';

let input_sign = reactive({
        username: '',
        password: '',
        email: ''
});

function sign_up(){
    const userDto = new UserDto(input_sign.username, input_sign.password, input_sign.email,'');
    api_sign(userDto).then(success => {
        let alertObj = {
            icon: 'success',
            title: '註冊',
            text: success.data
        }
        showAlert(alertObj);
        toLogin();
    }).catch(err => {
        showAlert(err.response.data);
    })
}

</script>

<template>
    <v-sheet width="500" class="mx-auto">
        <v-form ref="form">
            <v-text-field v-model="input_sign.username" label="帳號" required></v-text-field>
            <v-text-field v-model="input_sign.password" type="password" label="密碼" required></v-text-field>
            <v-text-field v-model="input_sign.email" type="email" label="電子郵件" required></v-text-field>
            <div class="d-flex flex-column">
                <v-btn @click="sign_up()" color="success" class="mt-4" block >
                    註冊
                </v-btn>
            </div>
        </v-form>
    </v-sheet>
</template>

<style scoped>
    
</style>
