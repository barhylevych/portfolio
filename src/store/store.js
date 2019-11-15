import { createStore } from 'redux'
import { combineReducers} from "redux";
import getters from "../redusers/reducer";

const rootReducer = combineReducers(getters)

const store =createStore(rootReducer)

export default store
