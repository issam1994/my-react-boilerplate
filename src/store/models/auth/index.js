import { computed, action, thunk } from 'easy-peasy'
import axios from 'axios'

const authModel = {
    //state
    token: null,
    //computed
    isAuthenticated: computed(({ token }) => token ? true : false),
    //actions
    saveToken: action((state, token) => {
        state.token = token
        localStorage.setItem('token', token)
    }),
    destroyToken: action((state) => {
        state.token = null;
        localStorage.removeItem('token');
    }),
    //thunks
    register: thunk(async (actions, payload) => {
        try {
            let { token } = (await axios.post('/auth/register', payload)).data
            actions.saveToken(token)
        } catch (e) {
            console.log("error in register()", e)
        }
    }),
    login: thunk(async (actions, payload) => {
        try {
            let { token } = (await axios.post('/auth/login', payload)).data
            actions.saveToken(token)
        } catch (e) {
            console.log("error in login()", e)
        }
    }),
    tryAutoLogin: thunk((actions) => {
        let token = localStorage.getItem('token')
        if (!token) {
            return
        } else {
            actions.saveToken(token)
        }
    })
}

export default authModel