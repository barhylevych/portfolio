import React from "react";
import {i18n} from '../immortal/I18n'
import '../styles/LeftSideStyle.sass'
import PropTypes from 'prop-types'
import { Icon } from "antd"

const bodyInfo =(activity, key) => <p key={key} className={'left-side-text'}>{activity}</p>

const LeftSide = (props) => {
    return (
        <div className={'left-side'}>
            <img src={i18n.IMAGE} alt={'There should be picture'}/>
            {[i18n.NAME, i18n.SURNAME, i18n.ACTIVITY].map((element,index)=> bodyInfo(element, index))}
            <Icon type="home"/><span>Kiev</span><br/>
            <Icon type="code" /><span>React js</span><br/>
            <Icon type="instagram" />
            <Icon type="github" />
        </div>
    )
}

LeftSide.propTypes = {
    weather: PropTypes.object,
    startLoading: PropTypes.func,
    stopLoading: PropTypes.func,
}

export default LeftSide
