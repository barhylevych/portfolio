import React from 'react'
import FirstView from "../components/FirstView";
import SecondView from "../components/SecondView";
import './Header.sass'
import {connect} from "react-redux";
import {i18n} from '../utils/I18n'
import {startLoading} from "../actions/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faNewspaper, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import {Loading} from "../components/Loading/index";


const Header = () => {
	return(
		<header>
				<p className={'logo'}><FontAwesomeIcon icon={faCode}/>{i18n.SURNAME} </p>
				<nav>
					<ul className={'header'}>
						<li><p> {<FontAwesomeIcon icon={faNewspaper}/>}{i18n.CONTACT} </p></li>
						<li><p> {<FontAwesomeIcon icon={faShareAlt}/>}</p></li>
					</ul>
				</nav>
			</header>
	)
}

const mapStateToProps = (state) => (
	{
		loading: state.loading,
	})

export default connect(mapStateToProps, {startLoading})((props) => {
	const loading = props.loading
	return (
		<div className={'project'}>
			{loading && <label className={'loading'}><Loading/></label>}
			<Header/>
			<FirstView/>
			<SecondView/>
		</div>
	)
})

