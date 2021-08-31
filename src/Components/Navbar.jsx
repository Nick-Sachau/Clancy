import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { links } from '../util/consts';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [navActive, setNavActive] = useState(false)

    const openNav = () => {
        setNavActive(!navActive)
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className={`nav-header ${navActive ? 'active' : ''}`}>
                    <img src="" alt="logo(do later)" className="logo" />
                    <button onClick={openNav} className="nav-toggle" >
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className={`links-container ${navActive ? "show" : ''}`}>
                    <ul className="links">
                        {links.filter((link) => link.text !== "Error").map((link) => {
                            const { id, url, text } = link;

                            return (
                                <li key={id}>
                                    <Link to={url}>
                                        {text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
