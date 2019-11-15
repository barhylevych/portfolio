import React from "react";
import {connect} from "react-redux";
import '../styles/LeftSideStyle.css'
import {getDate, getWeather} from "../actions/action";
import RightSide from "../components/RightSide";

const mapStateToProps = (state) => ({
    st: state
})

const mapDispatchToProps = dispatch => {
  return {
      weather: () => dispatch(getWeather())
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(RightSide)
