import {GET_WEATHER, GET_DATE} from "../immortal/actions_immortals";

const initialState = {
    weather: {},
}

function gettersFromAPI(state = initialState, action) {
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

export default gettersFromAPI
