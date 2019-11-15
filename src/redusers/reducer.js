import {GET_WEATHER, GET_DATE} from "../immortal/actions_immortals";
import {combineReducers} from "redux";

const initialState = {
    weather: {},
}

function getters (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            console.log('weather')
            return {...state}
        case GET_DATE:
            console.log('moment')
            return {...state}
        default:
            console.log('state', state)
            return state
    }
}

const rootReducer = combineReducers({getters})
export default rootReducer
