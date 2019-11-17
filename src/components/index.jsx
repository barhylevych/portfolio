import React from 'react'
import LeftSide from "../connectors/LeftSideConnector";
import RightSide from "../connectors/RightSideConnector";
import '../styles/Header.css'
import {i18n} from '../immortal/I18n'
import {Icon} from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook} from '@fortawesome/free-solid-svg-icons'

const fontAwesome = <FontAwesomeIcon icon={faAddressBook}/>

const App = () => {
    return (
        <div className={'project'}>
            <header>
                <p className={'logo'}> {<Icon type="bug"/>}{i18n.SURNAME} </p>
                <nav>
                    <ul className={'header'}>
                        {/*<div className={'project-header-block'}>*/}
                        <li><p> {<Icon type="contacts"/>}{i18n.CONTACT} </p></li>
                        <li><p> {<Icon type="link"/>}{i18n.SOCIAL} </p></li>
                        {/*</div>*/}
                    </ul>
                </nav>
            </header>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

export default App
