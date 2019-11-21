import React from "react";
import {connect} from "react-redux";
import {getWeather, startLoading, redirect, stopLoading} from "../../actions/action";
import LeftSide from "./Left";

const mapStateToProps = (state) => ({
    weather: state.weather
})

const mapDispatchToProps = (dispatch) => ({
    getWeather: () => dispatch(getWeather()),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
    redirect: action => dispatch(redirect(action)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
