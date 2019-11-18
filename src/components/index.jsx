import React from 'react'
import LeftSide from "../connectors/LeftSideConnector";
import RightSide from "../connectors/RightSideConnector";
import '../styles/Header.sass'
import {i18n} from '../immortal/I18n'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCode, faNewspaper, faShareAlt } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    return (
        <div className={'project'}>
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
}

export default App
