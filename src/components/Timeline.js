import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Timeline.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hntl">
      <div class="panel timeline" id="timeline_anchor">
        <div class="timeline-header">
          <h1>
            <span data-aos="fade-right">TIME</span>
            <span data-aos="fade-left">LINE</span>
          </h1>
        </div>
        <div class="timeline-container relative">
          <section class="card" data-aos="fade-left">
            <div class="book">
              <div class="first">
                <div class="front day2-card">
                  <h1>12th Feb</h1>
                </div>
                <div class="back">
                  <h1>
                    <b>12th Feb</b>
                  </h1>
                  <p>
                    Hackniche is a 24-hour hackathon taking place in DJ Sanghvi
                    College of Engineering, Mumbai on the 17th and 18th of
                    February.
                  </p>
                </div>
              </div>
              <div class="second">
                <div>
                  {" "}
                  <p>
                    <b>Registration Deadline to submit resumes.</b>
                  </p>
                </div>
                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>

            <div></div>
          </section>
          <section class="card-mob">
            <div class="second">
              <div>
                {" "}
                <p>
                  <b>Registration Deadline to submit resumes.</b>
                </p>
              </div>
              {/* <div><p>Click on an event to know more about it.</p></div>  */}
            </div>
          </section>
          <section class="card" data-aos="fade-right">
            <div class="book">
              <div class="first">
                <div class="front day1-card">
                  <h1>15th Feb</h1>
                </div>
                <div class="back">
                  <h1>
                    <b>15th Feb</b>
                  </h1>
                  <p>
                    Hackniche is a 24-hour hackathon taking place in DJ Sanghvi
                    College of Engineering, Mumbai on the 17th and 18th of
                    February.
                  </p>
                </div>
              </div>
              <div class="second">
                <div>
                  <p>
                    <b>Announcement of shortlisted teams for the Hackathon</b>
                  </p>
                </div>
                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>
            <div></div>
          </section>
          <section class="card-mob">
            <div class="second">
              <div class="second">
                <div>
                  <p>
                    <b>Announcement of shortlisted teams for the Hackathon</b>
                  </p>
                </div>
                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>
          </section>

          <section class="card" data-aos="fade-left">
            <div class="book">
              <div class="first">
                <div class="front day2-card">
                  <h1>16th Feb</h1>
                </div>
                <div class="back">
                  <h1>
                    <b>16th Feb</b>
                  </h1>
                  <p>
                    Hackniche is a 24-hour hackathon taking place in DJ Sanghvi
                    College of Engineering, Mumbai on the 17th and 18th of
                    February.
                  </p>
                </div>
              </div>
              <div class="second">
                <div>
                  <ul>
                    <li>
                      <div>
                        <b>6:00 PM</b>
                      </div>{" "}
                      <div>
                        <b>PS release + form to fill for preference</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>11:00PM</b>
                      </div>
                      <div>
                        <b>Close the form</b>
                      </div>
                    </li>
                  </ul>{" "}
                </div>
                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>

            <div></div>
          </section>
          <section class="card-mob">
            <div class="second">
              <div>
                <ul>
                  <li>
                    <div>
                      <b>6:00 PM</b>
                    </div>{" "}
                    <div>
                      <b>PS release + form to fill for preference</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>11:00PM</b>
                    </div>
                    <div>
                      <b>Close the form</b>
                    </div>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </section>

          <section class="card" data-aos="fade-right">
            <div class="book">
              <div class="first">
                <div class="front day3-card">
                  <h1>17th Feb</h1>
                </div>
                <div class="back">
                  <h1>
                    <b>17th Feb</b>
                  </h1>
                  <ul>
                    <li>
                      <div>Reporting + Registration of teams at College.</div>
                      <div>
                        <b>7:30AM-8:45AM</b>
                      </div>{" "}
                    </li>
                    <li>
                      <div>Opening Ceremony</div>
                      <div>
                        <b>9:30AM-10:45AM</b>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="second">
                <div>
                  <ul>
                    <li>
                      <div>
                        <b>Release the PS alloted to the teams</b>
                      </div>
                      <div>
                        <b>10:00AM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Coding Round Begins</b>
                      </div>
                      <div>
                        <b>11:00AM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Mentoring Round 1</b>
                      </div>
                      <div>
                        <b>4:00PM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Mentoring Round 2</b>
                      </div>
                      <div>
                        <b>11:30PM</b>
                      </div>
                    </li>
                  </ul>{" "}
                </div>

                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>

            <div></div>
          </section>
          <section class="card-mob">
            <div class="second">
              <div>
                <ul>
                  <li>
                    <div>
                      <b>Release the PS alloted to the teams</b>
                    </div>
                    <div>
                      <b>10:00AM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Coding Round Begins</b>
                    </div>
                    <div>
                      <b>11:00AM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Mentoring Round 1</b>
                    </div>
                    <div>
                      <b>4:00PM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Mentoring Round 2</b>
                    </div>
                    <div>
                      <b>11:30PM</b>
                    </div>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </section>

          <section class="card" data-aos="fade-left">
            <div class="book">
              <div class="first">
                <div class="front day4-card">
                  <h1>18th Feb</h1>
                </div>
                <div class="back">
                  <h1>
                    <b>18th Feb</b>
                  </h1>
                  <ul>
                    <li>
                      <div>
                        <b>Coding Round Ends</b>
                      </div>
                      <div>
                        <b>11:00AM</b>
                      </div>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="second">
                <div>
                  <ul>
                    <li>
                      <div>
                        <b>Judging Round 1</b>
                      </div>
                      <div>
                        <b>11:30AM-1:00PM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Round 1 Results Announced</b>
                      </div>
                      <div>
                        <b>1:30PM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Judging Round 2</b>
                      </div>
                      <div>
                        <b>3:00PM</b>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>Round 2 Results Announced</b>
                      </div>
                      <div>
                        <b>Closing Ceremony</b>
                      </div>
                      <div>
                        <b>5:30PM</b>
                      </div>
                    </li>
                  </ul>{" "}
                </div>
                {/* <div><p>Click on an event to know more about it.</p></div>  */}
              </div>
            </div>

            <div></div>
          </section>
          <section class="card-mob">
            <div class="second">
              <div>
                <ul>
                  <li>
                    <div>
                      <b>Judging Round 1</b>
                    </div>
                    <div>
                      <b>11:30AM-1:00PM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Round 1 Results Announced</b>
                    </div>
                    <div>
                      <b>1:30PM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Judging Round 2</b>
                    </div>
                    <div>
                      <b>3:00PM</b>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>
                        Results Announced for Judging Round 2 followed by
                        Closing Ceremony
                      </b>
                    </div>
                    <div>
                      <b>5:30PM</b>
                    </div>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </section>
          <div class="timeline-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
