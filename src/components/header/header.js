import * as React from 'react'
import PersonalImage from '../../images/personal.jpg'
import {headerContainer, headerImg, headerTitle} from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <img src={PersonalImage} alt="Personal of Michael Rygiel" className={headerImg}></img>
                <h1 className={headerTitle}>Michael Charles Rygiel</h1>
            </div>
        </header>
    )
}

export default Header
