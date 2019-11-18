import React from "react";
import {connect} from "react-redux";
import {getWeather} from "../actions/action";
import RightSide from "../components/RightSide";

const mapStateToProps = state => ({
    weather: state.weather,
    keyAPI: state.keyAPI
})

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(RightSide)
