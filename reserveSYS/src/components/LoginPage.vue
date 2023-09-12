<script setup lang="ts">

import { api_login } from '../hook/Base';
import UserDto from '@/class/UserDto'
import { reactive } from 'vue';
import { useMainStore } from '@/stores/counter'

const userData = reactive({
    username:'',
    password:''
});

const piniaStore = useMainStore();

function login() {
    const userDto = new UserDto(userData.username,userData.password);
    api_login(userDto).then(success => {
        //login success and set token 
        let token = success.data.token;
        console.log('MyToken is---' + token);
        piniaStore.setToken(token);
    }).catch(err => {
        //login fail 
        console.log(err.response.data);
    })
}

</script>

<template>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail>
                <v-text-field v-model="userData.username" label="User Name"></v-text-field>
                <v-text-field v-model="userData.password" label="password"></v-text-field>
                <v-btn @click="login()" type="button" color="blue" block class="mt-2">Sign in</v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<style scoped></style>
