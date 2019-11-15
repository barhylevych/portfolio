import React from "react";
import {connect} from "react-redux";
import '../styles/LeftSideStyle.css'
import {getDate, getWeather} from "../actions/action";
import LeftSide from "../components/LeftSide";

const mapDispatchToProps = {
    weather: getWeather(),
    date: getDate()
}

export default connect(null, mapDispatchToProps)(LeftSide)
