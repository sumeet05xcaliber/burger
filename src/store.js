import {createStore} from "redux"
import burgerReducer from './Reducer/index'
const store=createStore(burgerReducer);
export default store