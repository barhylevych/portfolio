import React from "react";
import {connect} from "react-redux";
//import '../styles/LeftSideStyle.sass'
import { getWeather, startLoading } from "../actions/action";
import LeftSide from "../components/LeftSide";

const mapStateToProps = (state) => ({
    weather: state.weather
})

const mapDispatchToProps = ({
    getWeather,
    startLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
