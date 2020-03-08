import {createStore} from 'easy-peasy'
import auth from './models/auth'

const storeModel = {
    auth
}
const store = createStore(storeModel);

export default store;