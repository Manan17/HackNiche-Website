import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Timeline.css';

const Timeline = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='hntl'>
      <div class="timeline-line"></div>
      <div class="panel timeline" id="timeline_anchor">
            <div class="timeline-header"><h1><span data-aos="fade-right">TIME</span><span data-aos="fade-left">LINE</span></h1></div>
            <div class="timeline-header-mob"><h1>TIMELINE</h1></div>
            <div class="timeline-container">
                <section class="card" data-aos="fade-right">
                    <div class="book">
                        <div class="first">
                          <div class="front day1-card">
                            <h1>DAY 1</h1>
                          </div>
                          <div class="back">
                            <h1>Day 1</h1>
                            <p>We kick off the event with an exciting fashion show, after which we crown our Mr and Ms Essence. Later at night, rack your brains as you hunt for treasure.</p> 
                          </div>
                        </div>
                        <div class="second">
                          <div><ul>
                            <li> <a href="#" title="Opening Ceremony"><div>Opening Ceremony</div><div>11:00AM-12:30PM</div></a> </li> 
                          <li><a href="#" title="Fashion Show"><div>Fashion Show</div><div>1:00PM - 3:00PM</div></a></li>
                          <li><a href="#" title="Mr and Mrs fest"><div>Mr and Ms Fest</div><div>3:00PM - 6:00PM</div></a></li>
                          <li><a href="#" title="Treasure Hunt"><div>Treasure Hunt</div><div>7:00PM-12:30AM</div></a></li>
                          </ul> </div>
                          {/* <div><p>Click on an event to know more about it.</p></div>  */}
                        </div>
                      </div>
                    <div>
            </div>
                </section>
                <section class="card-mob">
                 
                  <div class="second">
                    <div><ul>
                      <li> <a href="#" title="Opening Ceremony"><div>Opening Ceremony</div><div>11:00AM-12:30PM</div></a> </li> 
                    <li><a href="#" title="Fashion Show"><div>Fashion Show</div><div>1:00PM - 3:00PM</div></a></li>
                    <li><a href="#" title="Mr and Mrs fest"><div>Mr and Ms Fest</div><div>3:00PM - 6:00PM</div></a></li>
                    <li><a href="#" title="Treasure Hunt"><div>Treasure Hunt</div><div>7:00PM-12:30AM</div></a></li>
                    </ul> </div>
                    {/* <div><p>Click on an event to know more about it.</p></div>  */}
                  </div>
                    

              </section>
                
                <section class="card" data-aos="fade-left">
                    <div class="book">
                        <div class="first">
                          <div class="front day2-card">
                            <h1>Day 2</h1>
                          </div>
                          <div class="back">
                            <h1>Day 2</h1>
                            <p>The fun continues through to the second day where you get to display all your skills, from acting to coding to gaming.</p>
                            
                          </div>
                        </div>
                        <div class="second">
                            <div><ul><li> <a href="#" title="Naatak"><div>Naatak</div><div>11:00AM-12:30PM</div></a> </li>
                                <li><a href="#" title="Code It"><div>Code It</div><div>1:00PM - 3:00PM</div></a></li>
                                <li><a href="#" title="COD Qualifiers"><div>COD Qualifiers</div><div>3:00PM - 6:00PM</div></a></li>
                                <li><a href="#" title="Chess Qualifiers"><div>Chess Qualifiers</div><div>7:00PM-12:30AM</div></a></li>
                                </ul> </div>
                                {/* <div><p>Click on an event to know more about it.</p></div>  */}
                        </div>
                      </div>
                    
              
                    <div>
                      
                    </div>
                

                </section>
                <section class="card-mob">
                 
                  <div class="second">
                    <div><ul><li> <a href="#" title="Naatak"><div>Naatak</div><div>11:00AM-12:30PM</div></a> </li>
                        <li><a href="#" title="Code It"><div>Code It</div><div>1:00PM - 3:00PM</div></a></li>
                        <li><a href="#" title="COD Qualifiers"><div>COD Qualifiers</div><div>3:00PM - 6:00PM</div></a></li>
                        <li><a href="#" title="Chess Qualifiers"><div>Chess Qualifiers</div><div>7:00PM-12:30AM</div></a></li>
                        </ul> </div>
                        {/* <div><p>Click on an event to know more about it.</p></div>  */}
                </div>
                

                </section>
               
                <section class="card" data-aos="fade-right">
                    <div class="book">
                        <div class="first">
                          <div class="front day3-card">
                            <h1>Day 3</h1>
                          </div>
                          <div class="back">
                            <h1>Day 3</h1>
                            <p>Impress the crowd with your voice, or with your moves on the dance floor. Then use your big brain to get through the chess finals and valorant qualifiers.</p>
                            
                          </div>
                        </div>
                        <div class="second">
                            <div>
                              <ul><li><a href="#" title="Open Mic"><div>Open Mic</div><div>11:00AM-12:30PM</div></a> </li>
                                <li><a href="#" title="Dance Battle"><div>Dance Battle</div><div>1:00PM-3:00PM</div></a></li>
                                <li><a href="#" title="Chess Finals"><div>Chess Finals</div><div>3:00PM-6:00PM</div></a></li>
                                <li><a href="#" title="Valorant Qualifiers"><div>Valo Qualifiers</div><div>7:00PM-12:30AM</div></a></li>
                                </ul> </div>
                                
                                {/* <div><p>Click on an event to know more about it.</p></div>  */}
                        </div>
                      </div>
                    
                    <div>
                        
                    </div>

                </section>
                <section class="card-mob">
                 
                  <div class="second">
                    <div>
                      <ul><li> <a href="#" title="Open Mic"><div>Open Mic</div><div>11:00AM-12:30PM</div></a> </li>
                        <li><a href="#" title="Dance Battle"><div>Dance Battle</div><div>1:00PM - 3:00PM</div></a></li>
                        <li><a href="#" title="Chess Finals"><div>Chess Finals</div><div>3:00PM - 6:00PM</div></a></li>
                        <li><a href="#" title="Valorant Qualifiers"><div>Valo Qualifiers</div><div>7:00PM-12:30AM</div></a></li>
                        </ul> </div>
                        {/* <div><p>Click on an event to know more about it.</p></div>  */}
                </div>
                

                </section>
               
                <section class="card" data-aos="fade-left">
                    <div class="book">
                        <div class="first">
                          <div class="front day4-card">
                            <h1>Day 4</h1>
                          </div>
                          <div class="back">
                            <h1>Day 4</h1>
                            <p>The final day sees the best gamers fight it out in the arena. Later, music groups from all over India have a battle of their own.</p>
                           
                          </div>
                        </div>
                        <div class="second">
                            <div><ul><li> <a href="#" title="Open Mic"><div>Open Mic</div><div>11:00AM-12:30PM</div></a> </li>
                                <li><a href="#" title="COD Finals"><div>COD Finals</div><div>1:00PM - 3:00PM</div></a></li>
                                <li><a href="#" title="Valorant Finals"><div>Valorant Finals</div><div>3:00PM - 6:00PM</div></a></li>
                                <li><a href="#" title="Band Event"><div>Band Event</div><div>7:00PM-12:30AM</div></a></li>
                                </ul> </div>
                                {/* <div><p>Click on an event to know more about it.</p></div>  */}
                        </div>
                      </div>
                    
                    <div>
                       
                    </div>

                </section>
                <section class="card-mob">
                 
                  <div class="second">
                    <div><ul><li> <a href="./EventPages/openmic.html" title="Open Mic"><div>Open Mic</div><div>11:00AM-12:30PM</div></a> </li>
                        <li><a href="./EventPages/cod.html" title="COD Finals"><div>COD Finals</div><div>1:00PM - 3:00PM</div></a></li>
                        <li><a href="./EventPages/valofinal.html" title="Valorant Finals"><div>Valorant Finals</div><div>3:00PM - 6:00PM</div></a></li>
                        <li><a href="./EventPages/BandEvent.html" title="Band Event"><div>Band Event</div><div>7:00PM-12:30AM</div></a></li>
                        </ul> </div>
                        {/* <div><p>Click on an event to know more about it.</p></div>  */}
                </div>
                

                </section>
                
               
            </div>
        </div>
</div>
  )
}

export default Timeline
