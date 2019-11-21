import React from "react";
import {connect} from "react-redux";
import {startLoading, stopLoading} from "../../actions/action";
import Right from "./Right";

const mapStateToProps = state => ({
        weather: state.weather,
    })

const mapDispatchToProps = dispatch => {
    return {
        stopLoading: () => dispatch(stopLoading()),
        startLoading: () => dispatch(startLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Right)
