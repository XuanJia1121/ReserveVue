<script setup lang="ts">

import { api_login } from '../hook/Base';
import UserDto from '@/class/UserDto'
import { reactive } from 'vue';

const userData = reactive({
    username:'',
    password:''
});

function login() {
    const userDto = new UserDto(userData.username,userData.password);
    api_login(userDto);
}

</script>

<template>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail>
                <v-text-field v-model="userData.username" label="User Name"></v-text-field>
                <v-text-field v-model="userData.password" label="password"></v-text-field>
                <v-btn @click="login()" type="button" color="primary" block class="mt-2">Sign in</v-btn>
            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>

<style scoped></style>
