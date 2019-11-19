import React from 'react'
import LeftSide from "../connectors/LeftSideConnector";
import RightSide from "../connectors/RightSideConnector";
import '../styles/Header.sass'
import {connect} from "react-redux";
import {i18n} from '../immortal/I18n'
import {startLoading} from "../actions/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCode, faNewspaper, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from "../components/Loading";

const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => (
    {
        startLoading: () => dispatch(startLoading())
    })

export default connect(mapStateToProps, mapDispatchToProps)( (props) => {
    const loading = props.loading
    console.log(loading)
    return (
        <div className={'project'}>
            {loading && <label className={'loading'}><Loading/></label>}
            <header>
                <p className={'logo'}> <FontAwesomeIcon icon={faCode}/>{i18n.SURNAME} </p>
                <nav>
                    <ul className={'header'}>
                        <li><p> {<FontAwesomeIcon icon={faNewspaper}/>}{i18n.CONTACT} </p></li>
                        <li><p> {<FontAwesomeIcon icon={faShareAlt}/>}</p></li>
                    </ul>
                </nav>
            </header>
            <LeftSide/>
            <RightSide/>
        </div>
    )
})
