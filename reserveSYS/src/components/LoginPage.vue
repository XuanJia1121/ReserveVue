<script setup lang="ts">

import { api_login } from '../hook/Base';
import UserDto from '@/class/UserDto'
import { reactive, ref } from 'vue';
import { useMainStore } from '@/stores/counter'
import useRouter from '../router/index'

function toHome() {
    useRouter.push('/');
}

let showDialog = ref(false);
let showDialogMsg = ref("");

const userData = reactive({
    username: '',
    password: ''
});

const piniaStore = useMainStore();

function login() {
    const userDto = new UserDto(userData.username, userData.password);
    api_login(userDto).then(success => {
        //login success and set token 
        let token = success.data.token;
        console.log('MyToken is---' + token);
        piniaStore.setToken(token);
        showDialog.value = true;
        showDialogMsg.value = "登入成功";
        setTimeout(() => {
            toHome();
        }, 500);
    }).catch(err => {
        //login fail 
        showDialog.value = true;
        showDialogMsg.value = "登入失敗，帳號或密碼錯誤";
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
        <v-dialog v-model="showDialog" width="300px">
            <v-card>
                <v-card-text>
                    {{ showDialogMsg }}
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped></style>
