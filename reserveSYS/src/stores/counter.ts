import { defineStore } from 'pinia'
import Product from '@/class/Product';

export const useMainStore = defineStore({
  id: 'main', // Fixed the typo 'mian' to 'main'
  state: () => ({
    username: '',
    token: '',
    isLogin: false,
    showBarBtn: true,
    products: []
  }),
  getters: {
    
  },
  actions: {
    setToken(token: string) {
      sessionStorage.setItem('token', token);
    },
    loginSuc(token: string, username: string){
      this.username = username;
      this.token = token;
      this.setToken(token);
      this.isLogin = true;
      console.log('set token' + token);
    },
    logOut(){
      sessionStorage.removeItem('token');
      this.isLogin = false;
      console.log('remove token');
    },
    setProducts(products: []) {
      this.products = products;
    }
  },
});

