import React from 'react'
import {i18n} from "../immortal/I18n";
import '../styles/CorePageStyle.css'

const App  = () => {
    return (
        <div className={'App'}>
            <a> {i18n.title}</a>
        </div>
    )
}

export default App
