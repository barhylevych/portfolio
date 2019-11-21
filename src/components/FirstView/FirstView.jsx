import React from "react";
import {i18n} from '../../utils/I18n'
import './style.sass'
import PropTypes from 'prop-types'
import {aboutMe} from "../../utils/info"
import {Icon} from "antd"

const FirstView = (props) => {

	const locateTo = (where) => props.redirect(where)

	const LeftSide = () =>
		<div className={'left-side-info'}>
			<img src={i18n.IMAGE} alt={i18n.ALT_PICTURE}/>
			<div className={'img-block'}>
				<h4> {i18n.SURNAME}</h4>
				<h2> {i18n.NAME}</h2>
				<h3> {i18n.ACTIVITY}</h3>
				<Icon type="home" onClick={props.stopLoading}/><span>{i18n.LOCATION}</span><br/>
				<Icon type="code" onClick={props.startLoading}/><span>{i18n.KNOWLEDGE}</span><br/>
			</div>
			<br/>
			<Icon type="instagram" onClick={() => locateTo(i18n.INSTAGRAM)}/>
			<Icon type="github" onClick={() => locateTo(i18n.GITHUB)}/>
		</div>

	/**
	 *     @description NEXT Right Side
	 */

	const RightSide = () => <div className={'right-side-info'}>
		{aboutMe(i18n.NAME, i18n.ACTIVITY)}
	</div>


	return (
		<div className={'first-view'}>
			<div>
				<LeftSide/>
				<RightSide/>
			</div>
		</div>

	)
}

FirstView.propTypes = {
	weather: PropTypes.object,
	startLoading: PropTypes.func,
	stopLoading: PropTypes.func,
	redirect: PropTypes.func,
}

export default FirstView
