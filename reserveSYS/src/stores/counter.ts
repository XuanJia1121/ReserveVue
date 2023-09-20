import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  UserDto  from '../class/UserDto'

export const useMainStore = defineStore({
  id: 'main', // Fixed the typo 'mian' to 'main'
  state: () => ({
    user: UserDto,
    isLogin: false,
    showBarBtn: true
  }),
  getters: {
    getUser(): UserDto {
      return this.user;
    }
  },
  actions: {
    setUser(user: UserDto) {
      this.user = user;
    },
    setToken(token: string) {
      sessionStorage.setItem('token', token);
    },
    loginSuc(token: string){
      this.setToken(token);
      this.isLogin = true;
      console.log('set token' + token);
    },
    logOut(){
      sessionStorage.removeItem('token');
      this.isLogin = false;
      console.log('remove token');
    }
  },
});

