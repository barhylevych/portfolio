import React, {useState} from "react";
import {i18n} from '../immortal/I18n'
import '../styles/RightSideStyle.css'
import {Button} from 'antd'

const RightSide = () => {

    const [click, setClick] = useState(false)

    return (
        <div className={'RightSide'}>
            <Button onClick={() => {setClick(!click)}}> Press me! </Button>
            {click && <a> {i18n.joke}</a>}
        </div>
    )
}

export default RightSide
