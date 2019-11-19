import {GET_WEATHER, STOP_LOADING, START_LOADING, REDIRECT} from "../immortal/actions_immortals";

export function stopLoading() {
    return {type: STOP_LOADING}
}

export function startLoading() {
    return {type: START_LOADING}
}

export function getWeather() {
    return {type: GET_WEATHER}
}

export function redirect (action) {
    return {type: REDIRECT, action: action}
}

