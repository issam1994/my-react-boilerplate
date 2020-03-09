import {createStore} from 'easy-peasy'
import auth from './models/auth'

const rootModel = {
    auth
}
const store = createStore(rootModel);

export default store;