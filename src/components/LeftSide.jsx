import React from "react";
import * as i18n from '../immortal/I18n'
import '../styles/LeftSideStyle.css'
import PropTypes from 'prop-types'

const LeftSide = (props) => {
    console.log(props.weather)

    return(
        <div className={'LeftSide'}>
            <p> {i18n.title}</p>
        </div>
    )
}

export default LeftSide

LeftSide.propTypes = {
    weather: PropTypes.array,
    data: PropTypes.array
  }
