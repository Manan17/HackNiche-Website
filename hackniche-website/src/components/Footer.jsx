import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content" id="contact_anchor">
            <h3>Hackniche 2023</h3>
            <ul className="links">
              <li><a href="./RegisterLogin/">Register</a></li>
              <li><a href="./goodies/">Domains</a></li>
              <li><a href="./faqpage/">FAQ</a></li>
              <li><a href="./goodies/">Sponsors</a></li>
          </ul>
            
            <p>Reach us at : <a href="mailto:gdsc.djsce@gmail.com">gdsc.djsce@gmail.com</a></p>
            <ul className="socials">
                
                
                <li><a href="https://instagram.com/gdsc.djsce?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://instagram.com/synapse.djsce?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
              
            </ul>
        </div>
        <div className="footer-bottom">
            <p>Hackniche 2023 <span>all rights reserved</span></p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
