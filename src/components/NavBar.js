// import React, {useEffect} from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './NavBar.css';

// const NavBar = () => {
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//     <nav id="nav" data-aos="menu-area" data-aos-anchor-placement="bottom-top" >
//         <a title="About" href="#about_anchor">About</a>
//         <a title="Timeline" href="#timeline_anchor">Timeline</a>
//         <a title="Prizes" href="#prizes_anchor">Prizes</a>
//         <a title="Domain" href="#domain_anchor">Domain</a>
//         <a title="Contact" href="#contact_anchor">Contact</a>
//         <a title="Sponsors" href="#sponsors_anchor">Sponsors</a>
//     </nav>
//     )
// }

// export default NavBar

import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-blue sticky top-0 z-30 w-full shadow navigation">
      <div className="bg-blue justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-3xl font-bold">HackNiche</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 right-10 ${
              navbar ? "absolute left-0 bg-black mt-0 w-full pl-4" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#about_anchor">About</a>
              </li>
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#timeline_anchor">Timeline</a>
              </li>
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#prizes_anchor"> Prizes</a>
              </li>
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#domain_anchor">Domains</a>
              </li>
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#sponsors_anchor">Sponsors</a>
              </li>
              <li
                onClick={() => setNavbar(!navbar)}
                className="text-white hover:text-blue-600 text-xl"
              >
                <a href="#contact_anchor">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
