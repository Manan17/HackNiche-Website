import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavBar.css';

const NavBar = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <nav id="nav" data-aos="menu-area" data-aos-anchor-placement="bottom-top" >
        <a title="About" href="#about_anchor">About</a>
        <a title="Timeline" href="#timeline_anchor">Timeline</a>
        <a title="Pronites" href="#pronites_anchor">Pronites</a>
        <a title="Contact" href="#contact_anchor">Contact</a>
        <a title="Sponsors" href="#sponsors_anchor">Sponsors</a>
        <a title="Profile" href="./profile/" class="profile show"></a>
    </nav>
    )
}

export default NavBar
