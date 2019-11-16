import React from "react";
import {connect} from "react-redux";
import '../styles/LeftSideStyle.css'
import {getWeather} from "../actions/action";
import LeftSide from "../components/LeftSide";

const mapStateToProps = (state) => ({
    weather: state.weather
})

const mapDispatchToProps = ({
    weather: () => getWeather(),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide)
