import team from './Assets/team.gif';
import digilogo from './Assets/sponsorsLogos/digilogo.png';
import celo from './Assets/sponsorsLogos/celo.png';
import polygon from './Assets/sponsorsLogos/polygon.png';
import shutterbugs from './Assets/sponsorsLogos/shutterbugs.png';
import alan from './Assets/sponsorsLogos/alan.png';
import koii from './Assets/sponsorsLogos/koii.png';
// import celo from "./Assets/sponsorsLogos/celo.png";
import echo3d from './Assets/sponsorsLogos/echo3d.png';
import interviewbuddy from './Assets/sponsorsLogos/interview-buddy.png';
import dessertino from './Assets/sponsorsLogos/dessertino.png'
import certificate from './Assets/sponsorsLogos/certificate.png';

import streamyard from './Assets/sponsorsLogos/streamyard1.JPG';
import plum from './Assets/sponsorsLogos/plum.png'
import coto from './Assets/sponsorsLogos/coto.png'
import grabon from './Assets/sponsorsLogos/grabon.png'
import taali from './Assets/sponsorsLogos/taali.png'
import wolfram from './Assets/sponsorsLogos/wolfram.jpg';
import gfg from './Assets/sponsorsLogos/gfg.png';

import certopus from './Assets/sponsorsLogos/certopus.png';
import prayosys from './Assets/sponsorsLogos/prayosys.png';
import shivalika from './Assets/sponsorsLogos/shivalika.JPG';
import gdsclogo from './Assets/sponsorsLogos/gdsclogo.png'
import shivam from './Assets/sponsorsLogos/shivam.JPG';
import jay_maharaj from './Assets/sponsorsLogos/jay_maharaj.jpeg';
import jay_bhavani from './Assets/sponsorsLogos/jay_bhavani.jpeg';
import maruti from './Assets/sponsorsLogos/maruti.jpeg';
import replit from './Assets/sponsorsLogos/replit.png';
// import interviewbuddy from './Assets/sponsorsLogos/ib.png';
import digitalocean from './Assets/sponsorsLogos/do.png';
import cuvette from './Assets/sponsorsLogos/cuvette.png';
import postman from './Assets/sponsorsLogos/pm.svg';
import taskade from './Assets/sponsorsLogos/logo_taskade_black.png';
import zenisha from './Assets/teami/Zenisha_Savaliya.jpeg';
import dhruvi from './Assets/teami/Dhruvi_Sherathiya.jpg';
import xyz from './Assets/sponsorsLogos/xyz-logo-color.png';
import me from './Assets/teami/Vashishth_Patel.jpg';
import dharmesh from './Assets/teami/Dharmesh_Poriya.jpg';
import Ryah from './Assets/teami/Ryah.jpg';
import socoffee from './Assets/sponsorsLogos/socoffee.png'
import nirali from './Assets/teami/Nirali.jpeg';
import smit from './Assets/teami/smit.jpeg';
import manav from './Assets/teami/manav.jpg';
// import ruchit from "./Assets/teami/Ruchit_Parekh.jpg";
import parshwa from './Assets/teami/Parshwa_Mehta.jpg';
import ayush from './Assets/teami/Ayush_Rudani.jpg';
import aneri from './Assets/teami/Aneri_Sonani.jpg';


const TOP_SECTION = {
  TITLE: 'HackNiche',
  Typed_effect: [
    '17 February - 18 February',
    '24 hours of creation',
    'Win awesome prizes',
    'Events And Sessions'
  ],
  SHORT_DESCRIPTION:
    'Join us on 17th and 18th of February 2023 for 24 hours of creation, innovation, & fun with over 1000+ students.',
  IMG_SRC: team,
  DISCORD_LINK: 'https://discord.gg/cvHPEK7U3v',
  JUDGES_FORM_LINK: '#Jugdes Form Link',
  HACKERS_REGISTRATION_FORM_LINK: '#Hackers Registration devfolio link'
};

const SOCIALS = {
  instagramgdsc: 'https://instagram.com/gdsc.djsce?igshid=YmMyMTA2M2Y=',
  instagramsyn: 'https://instagram.com/synapse.djsce?igshid=YmMyMTA2M2Y=',
  discord: 'https://discord.gg/cNE4SYSh',
  email: 'mailto:help.hackniche@gmail.com',
  mail: 'help.hackniche@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is HackNiche?',
  LONG_DESCRIPTION: `Hackniche is a 24-hour hackathon taking place in DJ Sanghvi College of Engineering, Mumbai, on the 17th and 18th of February 2023.
    Our hackathon brings talented and ambitious students from all over India together to collaborate and create innovative solutions to real-world problems.
    Students can register in groups of 2-4 people. The hackathon is going to be conducted in 2 rounds. First, all the registered participants will submit their resumes, 
    which will be screened by a qualified team on our end and shortlisted. The teams that move on to round 2 will be invited to the offline hackathon happening on campus, 
    where they will have 24 hours to build a prototype for their chosen problem statement.
    Arrangements will be made for refreshments, resting, and recreational activities for our participants.`,
  LOGO_EFFECT: true,
  LOGO: ''
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: '#Volunteer form link'
  },
  JOIN_TEAM: {
    required: true,
    src: '#Join team link'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

const calenderStartingDate = {
  month: 7,
  year: 2022
};

const schedule = [
  {
    day: '16-7-2022',
    events: [
      {
        title: 'Opening Ceremoney',
        timings: '8 AM - 9 AM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '16-7-2022',
    events: [
      {
        title: 'Event',
        timings: '11 AM - 12 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '16-7-2022',
    events: [
      {
        title: 'Event',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '17-7-2022',
    events: [
      {
        title: 'Event',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '17-7-2022',
    events: [
      {
        title: 'Closing Ceremoney',
        timings: '6 PM - 7 PM',
        link: 'https://google.com'
      }
    ]
  }
];

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Overall First',
      content:
        'The first overall prize will be given to a project that outstands all other submissions.'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Overall Second',
      content:
        'The second overall prize will be given to the second-best project in the hackathon.'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Overall Third',
      content:
        'The third overall prize will be given to the third-best project in the hackathon.'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Women Team',
      content:
        'Your project will qualify for this category if your all team members are women.'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best DDU Team',
      content:
        'Your project will qualify for this category if your all team members are from DDU.'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: 'Vashishth Patel',
      role: 'Lead Organizer',
      github: 'https://github.com/vasu-1',
      linkedin: 'https://www.linkedin.com/in/vashishth-patel-312a52204/',
      img: me
    },
    {
      Name: 'Ayush Rudani',
      role: 'Organizer',
      github: 'https://github.com/R-Ayush777',
      linkedin: 'https://www.linkedin.com/in/ayush-rudani-7a3516204/',
      img: ayush
    },
    {
      Name: 'Smit Padaliya',
      role: 'Organizer',
      github: 'https://github.com/Smit-05',
      linkedin: 'https://www.linkedin.com/in/smit-padaliya-aa03291b8/',
      img: smit
    }
  ],
  [
    // Array 2
    {
      Name: 'Zenisha Savaliya',
      role: 'Manager',
      github: 'https://github.com/zenishasavaliya',
      linkedin: 'https://www.linkedin.com/in/zenishasavaliya/',
      img: zenisha
    },
    {
      Name: 'Parshwa Mehta',
      role: 'Manager & Content',
      github: 'https://github.com/PARSHWA0510',
      linkedin: 'https://www.linkedin.com/in/parshwa-mehta-949306205',
      img: parshwa
    },
    {
      Name: 'Dharmesh Poriya',
      role: 'Manager',
      github: 'https://github.com/Dharmesh-Poriya07',
      linkedin: 'https://www.linkedin.com/in/dharmesh-poriya/',
      img: dharmesh
    }
  ],
  [
    // Array 2
    {
      Name: 'Aneri Sonani',
      role: 'Manager & Web',
      github: 'https://github.com/AneriSonani09',
      linkedin: 'https://www.linkedin.com/in/aneri-sonani-061b44204/',
      img: aneri
    },
    {
      Name: 'Nirali Darji',
      role: 'Design Lead',
      github: '#',
      linkedin: 'https://www.linkedin.com/in/nirali-darji-1b766a209',
      img: nirali
    },
    {
      Name: 'Dhruvi Sherathiya',
      role: 'Outreach Lead',
      github: 'https://github.com/DhruviSherathiya',
      linkedin: 'https://www.linkedin.com/in/dhruvisherathiya',
      img: dhruvi
    }
  ],
  [
    // Array 2
    {
      Name: 'Manav Shah',
      role: 'Content Lead',
      github: 'https://github.com/manavshah25',
      linkedin: 'https://www.linkedin.com/in/manav-shah-28a521212',
      img: manav
    }
  ]
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Manager',
      github: '',
      linkedin: '',
      img: Ryah
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ]
];

const sponsorLogos = [
  // [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const titlesponsorLogos = [
  [{ src: celo, link: 'https://celo.org/' }] //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const poweredBy = [
  [{ src: socoffee, link: 'https://sleepyowl.co/' }] //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const snackPartner = [
  [{ src: taali, link: '' }] //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const techPartner = [
  [{ src: coto, link: 'https://sleepyowl.co/' }] //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const communityPartner = [
  [{ src: gdsclogo, link: 'https://developers.google.com/community/gdsc/leads/' }] //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const goldsponsorLogos = [
  // [  ], //Array 1
  [
    { src: taskade, link: 'https://www.taskade.com/' },
    { src: wolfram, link: 'https://www.wolframalpha.com//' },
    { src: dessertino, link: '' },
    { src: echo3d, link: 'https://www.echo3d.co/' },
    { src: digitalocean, link: 'https://www.digitalocean.com/' },
    { src: certificate, link: '' },
    { src: interviewbuddy, link: 'https://interviewbuddy.in/' },
    { src: plum, link: '' },
    { src: grabon, link: '' },

    {
      src: xyz,
      link: 'https://gen.xyz/'
    }
  ] //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const silversponsorLogos = [
  [
    { src: echo3d, link: 'https://www.echo3d.co/' },
    { src: wolfram, link: 'https://www.wolfram.com/' },
  ], //Array 1
  [
    { src: alan, link: 'https://alan.app/' },
    { src: shivam, link: '#' }
  ]
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const bronzeponsorLogos = [
  [
    { src: replit, link: 'https://replit.com/' },
    { src: certopus, link: 'https://certopus.com/' },
    { src: taskade, link: 'https://www.taskade.com/' }
  ], //Array 1
  [
    { src: koii, link: 'https://www.koii.network/' },
    { src: postman, link: 'https://postman.com/' },
    { src: prayosys, link: 'https://prayosys.com/' }
  ],
  [
    { src: shivalika, link: '#' },
    { src: cuvette, link: 'https://www.cuvette.tech/' }
  ]
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

const FoodLogos = [
  [
    { src: maruti, link: '#' },
    { src: jay_bhavani, link: '#' },
    { src: jay_maharaj, link: '#' }
  ]
];

const designlogo = [
  [
    { src: digilogo, link: 'https://www.instagram.com/digicosmic_studio/' },
    { src: streamyard, link: 'https://streamyard.com/' },
    { src: shutterbugs, link: 'https://www.instagram.com/shutterbugs_ddu/?hl=en' }
  ]
];

const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'HackNiche is open to all undergraduate, high school students, and middle school students from all schools.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first-time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form a team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team."
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to register yourself on UnStop and join discord, we will guide you through everything there.'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (help.hackniche@gmail.com) we would happy to help you.'
      },
      {
        label: 'Can I participate as a individual?',
        content:
          'No, Because our goal is collaborative learning, we encourage everyone to participate as a team of at least two people.'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes, Participants and winners will receive swags, certificates, goodies, and much more!'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  titlesponsorLogos,
  goldsponsorLogos,
  silversponsorLogos,
  bronzeponsorLogos,
  TeamInfo,
  poweredBy,
  snackPartner,
  techPartner,
  communityPartner,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  designlogo,
  FoodLogos
};
