import React from "react";
import {i18n} from '../../utils/I18n'
import './style.sass'
import PropTypes from 'prop-types'
import {Icon} from "antd"

const bodyInfo = (activity, key) => <p key={key} className={'left-side-text'}>{activity}</p>

const LeftSide = (props) => {

    const locateTo = (where) => props.redirect(where)

    return (
        <div className={'left-side'}>
            <div className={'body'}>
                <div className={'left-side-info'}>
                    <img src={i18n.IMAGE} alt={i18n.ALT_PICTURE}/>
                    <br/>
                    <Icon type="instagram" onClick={() => locateTo(i18n.INSTAGRAM)} />
                    <Icon type="github" onClick={() => locateTo(i18n.GITHUB)} />
                </div>
                <div className={'right-side-info'}>
                    {[i18n.NAME, i18n.SURNAME, i18n.ACTIVITY].map((element, index) => bodyInfo(element, index))}
                    <Icon type="home" onClick={props.stopLoading } /><span>Kiev</span><br/>
                    <Icon type="code" onClick={props.startLoading }/><span>React js</span><br/>
                </div>
            </div>
        </div>
    )
}

LeftSide.propTypes = {
    weather: PropTypes.object,
    startLoading: PropTypes.func,
    stopLoading: PropTypes.func,
    redirect: PropTypes.func
}

export default LeftSide
