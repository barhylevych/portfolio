import React, {useState} from "react";
import * as i18n from '../immortal/I18n'
import '../styles/RightSideStyle.css'
import {Button} from 'antd'
import PropTypes from 'prop-types'

const RightSide = (props) => {

    const [click, setClick] = useState(false)

    return (
        <div className={'RightSide'}>
            <Button onClick={() => {setClick(!click)}}> Press me! </Button>
            {click && <a> {i18n.joke}</a>}
        </div>
    )
}

RightSide.propTypes = {
    weather: PropTypes.array,
}

export default RightSide
