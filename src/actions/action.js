import {GET_WEATHER, STOP_LOADING, SHOW_LOADING} from "../immortal/actions_immortals";

export function stopLoading() {
    return {type: STOP_LOADING}
}

export function startLoading() {
    return {type: SHOW_LOADING}
}

export function getWeather() {
    return {type: GET_WEATHER}
}

