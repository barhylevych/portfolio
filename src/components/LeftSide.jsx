import React from "react";
import {i18n} from '../immortal/I18n'
import '../styles/LeftSideStyle.css'

const LeftSide = () => {
    return(
        <div className={'LeftSide'}>
            <p> {i18n.title}</p>
        </div>
    )
}

export default LeftSide
