import PropTypes from "prop-types";
import React from "react";
import 'src/styles/Header.sass'

const Header = () => {

    return (
        <div className={'header'}>
            <span>
qwer
            </span>
            <span>
                helll
            </span>
            <span>
yuoi
            </span>
        </div>
    )
}

Header.propTypes = {
    weather: PropTypes.func,
    data: PropTypes.array,
}

export default Header
