import { createStore } from 'redux'
import rootReducer from "../redusers/reducer";

const store =createStore(rootReducer)

export default store
