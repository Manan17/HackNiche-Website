import React from 'react';
import './Timeline.css';

function TimeLine() {
  return (
    <div>
      <div class="wrap">
        <div class="center-line">
          <a href="#" class="scroll-icon">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">
                Registration Deadline to Submit Resumes.
              </span>
              <span>12th FEB</span>
            </div>
            {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
             */}
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-star"></i>
            <div class="details">
              <span class="title">
                Announcement of Shortlisted teams for the Hackathon
              </span>
              <span>15th FEB</span>
            </div>
            {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
             */}
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-rocket"></i>
            <div class="details">
              <span class="title">PS Release</span>
              <span>16th FEB</span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>6:00PM</b>: PS Release + form to fill Preferences
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:00PM</b>: Close the Form
            </p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa-globe"></i>
            <div class="details">
              <span class="title">Hackathon Starts</span>
              <span>17th FEB</span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>7:30-9:00AM</b>: Reporting of Teams+ Registration at college
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>9:30-11:30AM</b>: Opening Ceremony
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:00AM</b>: Coding Round Begins
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:00AM</b>: Mentoring Round 1
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:30PM</b>: Mentoring Round 2
            </p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-paper-plane"></i>
            <div class="details">
              <span class="title">2nd Day</span>
              <span>18th FEB</span>
            </div>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:00AM</b>: Coding Round Ends
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>11:30AM</b>: Round 1 Evaluation
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>1:30PM</b>: Round 1 Results
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>3:30PM</b>: Round 2 Evaluation
            </p>
            <p className="timeline_text" style={{fontSize: '14px'}}>
              <b>6:00PM</b>: Prize Distribution
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
