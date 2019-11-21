import React, {useState} from "react";
import {i18n} from '../../utils/I18n'
import './style.css'
import {Button} from 'antd'
import PropTypes from 'prop-types'
import Map from '../Map'

const Right = (props) => {

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

Right.propTypes = {
    weather: PropTypes.object,
    keyAPI: PropTypes.string,
}

export default Right
