import {GET_WEATHER, START_LOADING, STOP_LOADING, REDIRECT} from "../immortal/actions_immortals";

const initialState = {
    weather: {},
    loading: false,
    keyAPI: 'pk.eyJ1IjoiYmFyaHlsZXZ5Y2giLCJhIjoiY2szMWVkNXJpMDdsaDNsbWpscjZveHczaSJ9.iz0Tb0UTzZ1_Rt0chVmooA',
}

function gettersFromAPI (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case GET_WEATHER:
            return {...state}
        case START_LOADING:
            return {...state, loading: true}
        case STOP_LOADING:
            return {...state, loading: false}
        case REDIRECT:
            switch (action.body) {
                case ('instagram'):
                    break
                case ('github'):
                    window.location.href = 'https://github.com'
                    break
                default:
            }
            return {...state}
        default:
            return state
    }
}

export default gettersFromAPI
