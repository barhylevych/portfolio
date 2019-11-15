import { GET_DATE, GET_WEATHER } from "../immortal/actions_immortals";

export function getDate() {
  return { type: GET_DATE }
}

export function getWeather() {
  return { type: GET_WEATHER }
}

