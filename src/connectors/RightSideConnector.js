import React from "react";
import {connect} from "react-redux";
import {getWeather, startLoading, stopLoading} from "../actions/action";
import RightSide from "../components/RightSide";

const mapStateToProps = state => (
    {
        weather: state.weather,
        keyAPI: state.keyAPI,
    })

const mapDispatchToProps = dispatch => {
    return {
        stopLoading: () => dispatch(stopLoading()),
        startLoading: () => dispatch(startLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSide)
