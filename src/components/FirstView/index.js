import React from "react";
import {connect} from "react-redux";
import {getWeather, startLoading, redirect, stopLoading} from "../../actions/action";
import FirstView from "./FirstView";

const mapStateToProps = (state) => ({
    weather: state.weather
})

const mapDispatchToProps ={
    getWeather,
    startLoading,
    stopLoading,
    redirect,
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstView)
