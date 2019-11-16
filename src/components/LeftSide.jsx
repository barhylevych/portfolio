import React from "react";
import {i18n} from '../immortal/I18n'
import '../styles/LeftSideStyle.css'
import PropTypes from 'prop-types'
import { Icon } from "antd"


const bodyInfo =( activity ) => {
    const title = activity + '_TITLE'
    return (
        <div className={'left-side-text'}>
        <span>{i18n[activity]}</span>
        </div>
    )
}

const LeftSide = (props) => {
    return (
        <div className={'left-side'} onClick={props.weather}>
            <img className={'left-side-img'} src={i18n.IMAGE} alt={'hell'}/>
            {['NAME', 'SURNAME', 'ACTIVITY'].map((element)=> bodyInfo(element))}
            <Icon type="home" /><span>Kiev</span><br/>
            <Icon type="code" /><span>React js</span><br/>
            <Icon type="instagram" />
            <Icon type="github" />
        </div>
    )
}

LeftSide.propTypes = {
    weather: PropTypes.func,
    data: PropTypes.array,
}

export default LeftSide
