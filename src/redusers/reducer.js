import {GET_WEATHER, GET_DATE} from "../immortal/actions_immortals";

const initialState = {
    weather: [],
    date: [],
}

function getters (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            const weather = {...state}.weather.push('hello')
            return {...state, weather}
        case GET_DATE:
            const moment = {...state}.date.push('11.22.2019')
            return {...state, moment}
        default:
            return state
    }
}

export default getters
