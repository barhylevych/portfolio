import {GET_WEATHER, START_LOADING, STOP_LOADING, REDIRECT} from "../globalStore/actions_immortals";
import {redirect} from "../utils/helper";

const initialState = {
    weather: {},
    loading: false,
    keyAPI: 'pk.eyJ1IjoiYmFyaHlsZXZ5Y2giLCJhIjoiY2szMWVkNXJpMDdsaDNsbWpscjZveHczaSJ9.iz0Tb0UTzZ1_Rt0chVmooA',
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {...state}
        case START_LOADING:
            return {...state, loading: true}
        case STOP_LOADING:
            return {...state, loading: false}
        case REDIRECT:
            redirect(action.body)
            return {...state}
        default:
            return state
    }
}

export default rootReducer
