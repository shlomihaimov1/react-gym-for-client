import React , { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import logo from '../images/Gfit-Logo-mini.png'

const NavBar = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
  

    return (

       <div>
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
           <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
             
            <div className="container">
                <div id="site-header-inner">
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                        <li><Link smooth to="#mint" className=''   onClick={()=> window.open("https://test3-rosy-two.vercel.app/", "_blank")}>Mint</Link></li>
                        <li><Link smooth to="#overview">OVERVIEW</Link></li>
                        <li><Link smooth to="#utilities">Utilities</Link></li>
                        <li><Link smooth to="#road-map">Road Map</Link></li>
                        <li><Link smooth to="#white-Paper" onClick={()=> window.open("https://www.africau.edu/images/default/sample.pdf", "_blank")}>White Paper</Link></li>
                        <li><Link smooth to="#faq">FAQ</Link></li>
                        <li><Link smooth to="#about">about us</Link></li>
                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
       </div>
    );
}

export default NavBar;