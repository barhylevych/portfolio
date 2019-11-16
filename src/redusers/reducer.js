import {GET_WEATHER, SHOW_LOADING, STOP_LOADING} from "../immortal/actions_immortals";

const initialState = {
    weather: {},
    loading: false,
    keyAPI: 'pk.eyJ1IjoiYmFyaHlsZXZ5Y2giLCJhIjoiY2szMWVkNXJpMDdsaDNsbWpscjZveHczaSJ9.iz0Tb0UTzZ1_Rt0chVmooA',
}

function gettersFromAPI (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {...state}
        case SHOW_LOADING:
            const stateCopy_1 = {...state}.loading = true
            return {...stateCopy_1}
        case STOP_LOADING:
            const stateCopy_2 = {...state}.loading = false
            return {...stateCopy_2}
        default:
            return state
    }
}

export default gettersFromAPI
