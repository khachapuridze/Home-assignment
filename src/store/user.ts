import { defineStore } from 'pinia'
import {setAuthToken} from '../auth'

interface loginResponse {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token:  string
}
interface State {
    userData: loginResponse
    name: string
}

// username: 'kminchelle',
// password: '0lelplR',
export const useUserStore = defineStore('user', {
    state: (): State => ({ userData: '', name: 'Eduardo' }),
    getters: {
      getUserName: (state: State) => `${state.userData.firstName} - ${state.userData.firstName}`,
    },
    actions: {
      async loginUser(username: string, password: string) {
        console.log(username, password, 'you have to enter thiscredentials to enter user modal - username: kminchelle, password: 0lelplR ')
          this.userData = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            })
        })
          .then(res => res.json())
          .then(r => r);
        setAuthToken(this.userData.token);
      }
    },
  })