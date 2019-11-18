import React, {useState} from "react";
import {i18n} from '../immortal/I18n'
import '../styles/RightSideStyle.css'
import {Button} from 'antd'
import PropTypes from 'prop-types'
import GoogleMap from '../components/GoogleMap'

const RightSide = (props) => {

    const [click, setClick] = useState(false)

    const toggleButton = () => setClick(!click)

    return (
        <div className={'right-side'}>
            <Button onClick={toggleButton}> Press me! </Button>
            {click && <p> {i18n.JOKE}</p>}
            {/*<GoogleMap*/}
            {/*    keyAPI={props.keyAPI}/>*/}
        </div>
    )
}

RightSide.propTypes = {
    weather: PropTypes.object,
    keyAPI: PropTypes.string,
}

export default RightSide
