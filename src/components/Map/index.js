import React from "react";
import {connect} from "react-redux";
import Map from "./Map";

const mapStateToProps = (state) => ({
    keyAPI: state.weather
})

export default connect(mapStateToProps, null)(Map)
