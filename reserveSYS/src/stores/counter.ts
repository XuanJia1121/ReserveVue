import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  UserDto  from '../class/UserDto'

export const useMainStore = defineStore({
  id: 'main', // Fixed the typo 'mian' to 'main'
  state: () => ({
    user: UserDto,
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
    }
  },
});

