import api from '@/http'
import UserDto from '@/class/UserDto'
import Swal from "sweetalert2"; //引入SweetAlert
import useRouter from '../router/index'
import { useMainStore } from '@/stores/counter'


export function api_login(userData: UserDto) {
    return api().post('/base/login', userData);
}

export function api_sign(userData: UserDto) {
    return api().post('/base/sign', userData);
}

export function api_oauth_google() {
    return api().post('/base/sign');
}

export function api_products() {
    return api().post('/product/all');
}

export function showAlert(msg: object) {
    Swal.fire(msg);
}

export function showAlertTimeOut(msg: string) {
    let timerInterval: any;
    Swal.fire({
        title: msg,
        html: '自動跳轉回首頁 <b></b> milliseconds.',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b: any = Swal.getHtmlContainer()!.querySelector('b')
            timerInterval = setInterval(() => {
                b!.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            toHome();
        }
    })
}

export function toSign(){
    const piniaStore = useMainStore();
    piniaStore.showBarBtn = false;
    useRouter.push('/sign');
}

export function toHome() {
    const piniaStore = useMainStore();
    piniaStore.showBarBtn = true;
    useRouter.push('/');
}

export function toLogin(){
    const piniaStore = useMainStore();
    piniaStore.showBarBtn = false;
    useRouter.push('/login');
}

