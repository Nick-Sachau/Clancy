import React from "react";
import { links } from '../util/consts';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="contactContainer">
                <h3>Contact Me</h3>
                <h5>Clancy Briggs</h5>
                <h5>+16234745069</h5>
                <button>Call!</button>
            </div>
            <div className="footerContainer">
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
            </div>
        </footer>
    );
};

export default Footer;
