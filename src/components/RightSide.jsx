import React, {useState} from "react";
import {i18n} from '../immortal/I18n'
import '../styles/RightSideStyle.css'
import {Button} from 'antd'
import PropTypes from 'prop-types'
import GoogleMap from '../components/GoogleMap'

const RightSide = (props) => {

    const [click, setClick] = useState(false)

    return (
        <div className={'right-side'}>
            <Button ghost onClick={() => {setClick(!click)}}> Press me! </Button>
            {click && <p> {i18n.JOKE}</p>}
            <GoogleMap/>
        </div>
    )
}

RightSide.propTypes = {
    weather: PropTypes.array,
}

export default RightSide
