import React from 'react'
import './Footer.css'
// import gdscl from './assets/gdscl.png';
// import synl from './assets/synl.png';



const Footer = () => {
  return (
    <div class="box" id="contact_anchor">
    <footer>
    <hr   className='line'/>
        <div class="container1">
            <div class="row">
                  <div class="col" id="company">
                  <h1>
                       Hackniche organized  by

                      </h1>
                      <div class="logo">
                        {/* <img src={gdscl}  class="gd" /> */}
                        {/* <img src={synl} />                         */}
                        
                      
                      </div>
                      
                      <div class="social">
                       
                        <a href="https://instagram.com/gdsc.djsce?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram"></i></a>
                        <a href="https://instagram.com/synapse.djsce?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram"></i></a>
                        <a href="https://discord.gg/cNE4SYSh"><i class="fa-brands fa-discord"></i></a>
                      
                       
                      </div>
                  </div>


                 

                  <div class="col" id="useful-links">
                     <h3>Links</h3>
                     <div class="links">
                        <a href="#about_anchor">About</a>
                        <a href="#timeline_anchor">Time Line</a>
                        <a href="#domain_anchor">Domains</a>
                        <a href="">Prizes</a>
                     </div>
                  </div>

                  <div class="col" id="contact">
                      <h3>Contact</h3>
                      
                      <div class="contact-details">
                      <i class="fa-regular fa-envelope"></i>
                      <a href='mailto:help.hackniche@gmail.com' >help.hackniche@gmail.com
                         </a>
                      </div>
                      <div class="contact-details">

                        <i class="fa-brands fa-discord"></i>
                        <p>
                        <a href="https://discord.gg/cNE4SYSh"> Discord Server </a>
                        </p>
                      </div>
                      <div class="contact-details">
                         <i class="fa fa-location"></i>
                         <p> No. U, 15, Bhaktivedanta Swami Rd, <br />opp. Cooper Hospital, Navpada, JVPD Scheme,<br /> Vile Parle, Mumbai, Maharashtra 400056 </p>
                      </div>
                     

                      </div>
                  </div>
                  <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='' src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=dj sangh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                     
                     
            </div>

           
<div class="bottom">
   <p className=''>Hachniche 2023 All Rights Reserved</p>
</div>
        
     </footer>
     </div>
  
  )
}

export default Footer
