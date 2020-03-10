import axios from 'axios'
import store from '../store'
import keys from './keys'

//setting base url for the api calls
axios.defaults.baseURL = keys.apiUrl

//intercept api calls to attach the token automatically
axios.interceptors.request.use((config) => {
    let { token } = store.getState().auth
    config.headers[keys.tokenHeader] = token
    return config
});