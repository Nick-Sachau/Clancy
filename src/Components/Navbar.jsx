import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { links } from '../util/consts';
import { GiHamburgerMenu } from 'react-icons/gi';
 

const Navbar = () => {

    const [navActive, setNavActive] = useState(false)
    const [rotateHamburger, setRotateHamburger] = useState(false)

    const openNav = () => {
        setNavActive(!navActive)
        setRotateHamburger(!rotateHamburger)
        console.log(rotateHamburger)
    }

    const closeNav = () => {
        setNavActive(false)
        setRotateHamburger(!rotateHamburger)
    }

    return (
        <nav className="navbar">
            <div className={`nav-header ${navActive ? 'active' : ''}`}>
                <Link to={'/'}>
                    <img src="../Images/Logo1.png" alt="logo" className="logo" />
                </Link>
                <button onClick={openNav} className={`nav-toggle ${rotateHamburger && 'rotate'}`}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className={`links-container ${navActive ? "show" : ''}`}>
                <ul className="links">
                    {links.filter((link) => link.text !== "Error").map((link) => {
                        const { id, url, text } = link;

                        return (
                            <li key={id}>
                                <Link onClick={closeNav} to={url}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
