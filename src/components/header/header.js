import * as React from 'react'
import PersonalImage from '../../images/personal.jpg'
import {headerImg} from './header.module.css'

const Header = () => {
    return (
        <header>
            <img src={PersonalImage} alt="Personal of Michael Rygiel" className={headerImg}></img>
            <h1>Michael Charles Rygiel</h1>
        </header>
    )
}

export default Header
