import React from "react";
import {connect} from "react-redux";
import '../styles/LeftSideStyle.css'
import {getWeather} from "../actions/action";
import RightSide from "../components/RightSide";

const mapStateToProps = (state) => ({
    keyAPI: state.keyAPI
})

const mapDispatchToProps = dispatch => {
  return {
      weather: () => dispatch(getWeather())
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(RightSide)
