import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    function toggleMenu() {
        if (!show) {
            document.querySelector(".menu-btn").classList.add("close");
            document.querySelector(".menu").classList.add("show");
            document.querySelector(".menu-nav").classList.add("show");
            document.querySelector(".menu-branding").classList.add("show");
            document
                .querySelectorAll(".nav-item")
                .forEach((item) => item.classList.add("show"));

            //Set Menu state
            setShow(true);
        } else {
            document.querySelector(".menu-btn").classList.remove("close");
            document.querySelector(".menu").classList.remove("show");
            document.querySelector(".menu-nav").classList.remove("show");
            document.querySelector(".menu-branding").classList.remove("show");
            document
                .querySelectorAll(".nav-item")
                .forEach((item) => item.classList.remove("show"));

            //Set Menu state
            setShow(false);
        }
    }

    return (
        <header>
            <div className="menu-btn" id="menu-btn" onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
                <ul className="menu-nav">
                    <li className="nav-item" onClick={toggleMenu}>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onClick={toggleMenu}>
                        <Link className="nav-link" to="/about">
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item" onClick={toggleMenu}>
                        <Link className="nav-link" to="projects">
                            My Projects
                        </Link>
                    </li>
                    <li className="nav-item" onClick={toggleMenu}>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
