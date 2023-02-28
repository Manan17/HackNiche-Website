import React from 'react';
import {Myinfo} from '../Top-division-components/Top-division-components.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './about.css';
import {Logo, LogoSectionAbout} from '../logo-section/logoSection.jsx';
import {FirstPrize, PrizeHeading} from '../prize tracks/prizes.jsx';
import {Prizeinfo} from '../../Module/General';
import {Accordion} from '../FAQ/faq.jsx';
// import {theme} from "../themes_test/theme.jsx";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import {Sponsor, SponsorsHead} from '../Sponsors/sponsors.jsx';
import Birds from '../Birds/birds.jsx';
import Footer from '../Footer/footer';
import {Member} from '../team/team.jsx';
import koii from '../../Module/Assets/sponsorsLogos/koii.png';
import pattern from './pattern4.png';
import Media from '../media/media.jsx';
import ThemeType from '../Themes/theme.jsx';
import TimeLine from '../Timeline/Timeline.jsx';
import filecoin from '../../Module/Assets/sponsorsLogos/filecoin.png';
import polygon from '../../Module/Assets/sponsorsLogos/polygon.png';
import alan from '../../Module/Assets/sponsorsLogos/alan.png';

import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  designlogo,
  poweredBy,
  communityPartner,
  titlesponsorLogos,
  bronzeponsorLogos,
  snackPartner,
  techPartner,
  silversponsorLogos,
  goldsponsorLogos,
  FoodLogos
} from '../../Module/General';

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row
      className="sponsor-edit"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      {props.map((s, key) => (
        <Col
          key={key}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          sm={12}
          lg={4}
          md={6}
        >
          {' '}
          <Sponsor link={s.link} srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {
  window.onscroll = () => {
    toggleTopButton();
    console.log(document.body.scrollHeight);
    console.log(document.body.scrollTop);
    console.log('Diff', document.body.scrollHeight - document.body.scrollTop);
  };

  const scrollToTop = event => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  function toggleTopButton() {
    if (document.body.scrollHeight - document.body.scrollTop < 800) {
      document.getElementById('back-to-up').style.display = 'none';
    } else if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('back-to-up').style.display = 'block';
    } else {
      document.getElementById('back-to-up').style.display = 'none';
    }
  }

  return (
    <div
      id="top"
      className="Whole_div"
      style={{backgroundImage: `url(${pattern})`}}
    >
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="img" src={TOP_SECTION.IMG_SRC} />
              <br />
            </Col>
          </Row>

          {/*          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>*/}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/*Theme Section*/}
        <Row className="prizesection non-coding" id="themes">
          <PrizeHeading type="Hackathon Domains" />
          <ThemeType />
        </Row>

        {/*TimeLine Section*/}
        <Row className="timeline" id="timeline">
          <PrizeHeading type="Hackathon TimeLine" />
          <TimeLine />
        </Row>

        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
        </Row>
        <div class="row1-container">
          <div class="box red">
            <h2>First Prize</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Rs. 25,000</b> <br />
              Swags & Goodies
              <br />
              <br />
              <a href="">Much More</a>
            </h4>
          </div>

          <div class="box box-down cyan">
            <h2>Second Prize</h2>
            <img
              className="imgright"
              src="https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Rs. 15,000</b> <br />
              Swags & Goodies
              <br />
              <br />
              <a href="">Much More</a>
            </h4>
          </div>

          <div class="box box-down blue">
            <h2>Third Prize</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Rs. 10,000</b> <br />
              Swags & Goodies
              <br />
              <br />
              <a href="">Much More</a>
            </h4>
          </div>
        </div>
        {/*      <div class="row2-container">
        <div class="box orange">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img class="imgright" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>*/}

        {/*Theme end*/}

        {/* <Birds top="100vh" left="0vh" type="" /> */}

        {/* *******Prizes here ***** */}
        {/*        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" /><br/>
          <div className="prize--cards">
          {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>*/}
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <h1 className="">Title Sponsors</h1>
          <br />
          {titlesponsorLogos?.map(SponsorGroup)}
          <br />
          <h1 className="">Powered By</h1>
          <br />
          {poweredBy?.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Gold Sponsors</h1>
          <br />
          {goldsponsorLogos?.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Snack Partner</h1>
          <br />
          {snackPartner?.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Tech Partner</h1>
          <br />
          {techPartner?.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Community Partner</h1>
          <br />
          {communityPartner?.map(SponsorGroup)}
          <br />
          <br />
        </Row>
        {/* ********Sponsors ending here ***** */}

        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1>


        {JudgesInfo.map(TeamMembers)} */}

        {/* ********Team ending here ***** */}

        {/* ********Team ending here ***** */}
        <br />
        <h1 id="faqs">FAQs</h1>
        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
      </Container>
      <br />
      <center>
        <div
          class="apply-button"
          data-hackathon-slug="duhacks"
          data-button-theme="light"
          // style="height: 44px; width: 312px"
        ></div>
      </center>

      <Footer />
      <div class="backtotop" id="back-to-up">
        <a onClick={scrollToTop}>
          <p>
            <i class="fa-solid fa-arrow-up"></i>
          </p>
        </a>
      </div>
    </div>
  );
}
