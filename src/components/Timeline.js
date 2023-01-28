import React,{useEffect} from 'react'
import './Timeline.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='tl'>
            <div className='etimetitle'><h1><span data-aos="fade-right">TIME</span><span data-aos="fade-left">LINE</span></h1></div>
                    <div class="timeline">
                            <>
                                <div class="econtainer left">
                                    <div class="econtent">
                                        <h1 className='timetitle'><b>12th FEB</b></h1>
                                        <div className='timedesc'>
                                            <ul>
                                                <li><div><b>Registration Deadline to Submit Resumes.</b></div></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>
                        
                            <>
                                <div class="econtainer right">
                                    <div class="econtent">
                                        <h1 className='timetitle'><b>15th FEB</b></h1>
                                        <div className='timedesc'>
                                            <ul>
                                                <li><div><b>Announcement of Shortlisted teams for the Hackathon</b></div></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>

                            <>
                                <div class="econtainer left">
                                    <div class="econtent">
                                        <h1 className='timetitle'><b>16th FEB</b></h1>
                                        <div className='timedesc'>
                                            <ul>
                                                <li><div className='timing'><b>6:00PM</b></div><div><b>PS Release + form to fill Preferences</b></div></li>
                                                <li><div className='timing'><b>11:00PM</b></div><div><b>Close the Form</b></div></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>

                            <>
                                <div class="econtainer right">
                                    <div class="econtent">
                                        <h1 className='timetitle'><b>17th FEB</b></h1>
                                        <div className='timedesc'>
                                            <ul>
                                                <li><div className='timing'><b>7:30-9:00AM</b></div><div><b>Reporting of Teams+ Registration at college</b></div></li>
                                                <li><div className='timing'><b>9:30-11:30AM</b></div><div><b>Opening Ceremony</b></div></li>
                                                {/* <li><div className='timing'><b>10:00AM</b></div><div><b>Release the PS alloted to the teams</b></div></li> */}
                                                <li><div className='timing'><b>11:00AM</b></div><div><b>Coding Round Begins</b></div></li>
                                                <li><div className='timing'><b>4:00PM</b></div><div><b>Mentoring Round 1</b></div></li>
                                                <li><div className='timing'><b>11:30PM</b></div><div><b>Mentoring Round 2</b></div></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>

                            <>
                                <div class="econtainer left">
                                    <div class="econtent">
                                        <h1 className='timetitle'><b>18th FEB</b></h1>
                                        <div className='timedesc'>
                                            <ul>
                                                <li><div className='timing'><b>11:00AM</b></div><div><b>Coding Round Ends</b></div></li>
                                                <li><div className='timing'><b>11:30AM</b></div><div><b>Round 1 Evaluation</b></div></li>
                                                <li><div className='timing'><b>1:30PM</b></div><div><b>Round 1 Results</b></div></li>
                                                <li><div className='timing'><b>3:30PM</b></div><div><b>Round 2 Evaluation</b></div></li>
                                                <li><div className='timing'><b>6:00PM</b></div><div><b>Prize Distribution</b></div></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>

                    </div>
            
        </div>
    )
}

export default Timeline
