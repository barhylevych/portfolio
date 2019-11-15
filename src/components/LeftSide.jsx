import React from "react";
import * as i18n from '../immortal/I18n'
import '../styles/LeftSideStyle.css'
import PropTypes from 'prop-types'

const LeftSide = (props) => {
    console.log(props)

    return(
        <div className={'LeftSide'} onClick={props.weather}>
            <p > {i18n.title}</p>
        </div>
    )
}

export default LeftSide

LeftSide.propTypes = {
    weather: PropTypes.func,
    data: PropTypes.array
  }
