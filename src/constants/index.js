import { light } from "@mui/material/styles/createPalette";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  dbc,
  dbiti,
  dbit,
  dbcl,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  youtube,
  img0,
  img3,
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },

  {
    id: "2",
    title: "Points",
    url: "/points",
  },
  {
    id: "3",
    title: "Departments",
    url: "/department",
  },
  {
    id: "4",
    title: "Instruction",
    url: "/instruction",
  },
  // {
  //   id: "1",
  //   title: "Events",
  //   url: "#events",
  // },
];

export const pointsnav = [];

export const capimg = [img0, img1, img2, img3, img4, img5, img6, img7];

export const homeNavigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Events",
    url: "#event",
  },
  {
    id: "2",
    title: "Committee",
    url: "#committee",
  },

  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [dbit, dbc, dbcl, dbiti];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "MANAGEMENT",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "https://www.instagram.com/euphoriadbcl/",
  },
  {
    id: "1",
    title: "DEPT. CAPTAINS",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "/department",
  },
  {
    id: "2",
    title: "CO-ORDINATORS",
    text: " ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "https://www.instagram.com/euphoriadbcl/",
  },
];

export const socials = [
  {
    id: "0",
    title: "youtube",
    iconUrl: youtube,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/euphoriadbcl/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const departments = [
  {
    id: "0",
    department: "COMPS",
    url: "/department/comps",
    color1: "#F6EED8",
    color2: "#F6EED8",
    captain: "Shubham Keluskar",
  },
  {
    id: "1",
    department: "MECH",
    url: "/department/mech",
    color1: "#A020F0",
    color2: "#000",
    captain: "Tyrell Pires",
  },
  {
    id: "2",
    department: "I.T",
    url: "/department/it",
    color1: "#008000",
    color2: "#00FF00",
    captain: "Ashish Varghese",
  },
  {
    id: "3",
    department: "E.X.T.C",
    url: "/department/extc",
    color1: "#FF0000",
    color2: "#000",
    captain: "Prathamesh Tadas",
  },
  {
    id: "4",
    department: "D.O.M.M.F",
    url: "/department/dommf",
    color1: "#008080",
    color2: "#FFF",
    captain: "Zuriel Fernandes",
  },
  {
    id: "5",
    department: "I.T.I",
    url: "/department/iti",
    color1: "	#FFC0CB",
    color2: "#FFF",
    captain: "Pradeep Epili",
  },
  {
    id: "6",
    department: "H.S",
    url: "/department/hs",
    color1: "#800080",
    color2: "#000",
    captain: "Vishaka Acharya",
  },
  {
    id: "7",
    department: "B.M.S",
    url: "/department/bms",
    color1: "	#0096FF",
    color2: "#FFF",
    captain: "Aishwarya Shetty",
  },
];

export const captainsData = [
  { department: "MECH" },
  { department: "COMPS" },
  { department: "E.X.T.C" },
  { department: "I.T" },
  { department: "H.S" },
  { department: "B.M.S" },
  { department: "D.O.M.M.F" },
  { department: "I.T.I" },
];

// export const winners = [
//   {
//     "department":{
//     bms: [
//       { "Event": "Table Tennis Girls Singles", "Place": "1st", "Winner": "Adhira" },
//       { "Event": "Table Tennis Girls Singles", "Place": "2nd", "Winner": "Shonell" },
//       { "Event": "Table Tennis Girls Singles", "Place": "3rd", "Winner": "Vidhyashree" },
//       { "Event": "Table Tennis Girls Doubles", "Place": "1st", "Winner": "Adhira David & Vidyashree" },
//       { "Event": "Table Tennis Doubles", "Place": "3rd", "Winner": "Yashneil & Abdul" },
//       { "Event": "80m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "80m Girls", "Place": "2nd", "Winner": "Sofia Nadar" },
//       { "Event": "80m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "200m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "200m Girls", "Place": "2nd", "Winner": "Shivani Sawant" },
//       { "Event": "200m Girls", "Place": "3rd", "Winner": "Tia Xaviers" },
//       { "Event": "400m Girls", "Place": "1st", "Winner": "Tia Xaviers" },
//       { "Event": "400m Girls", "Place": "2nd", "Winner": "Chloe Xaviers" },
//       { "Event": "400m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "800m Boys", "Place": "2nd", "Winner": "Adrian Soans" },
//       { "Event": "Relay Girls", "Place": "1st", "Winner": "BMS" },
//       { "Event": "Mixed Relay", "Place": "2nd", "Winner": "BMM" },
//       { "Event": "VolleyBall Girls", "Place": "1st", "Winner": "BMS" },
//       { "Event": "Box Cricket Girls", "Place": "3rd", "Winner": "BMS" },
//       { "Event": "Throwball", "Place": "1st", "Winner": "BMS" },
//       { "Event": "Rink Football Girls", "Place": "1st", "Winner": "BMS (Team Kyra)" },
//       { "Event": "Basketball Girls", "Place": "2nd", "Winner": "BMS" },
//       { "Event": "Basketball Boys", "Place": "1st", "Winner": "BMS" },
//       { "Event": "Kabaddi", "Place": "3rd", "Winner": "BMS" },
//       { "Event": "Field Football", "Place": "1st", "Winner": "BMS" }
//     ],

//     comps: [
//       { "Event": "Table Tennis Boys Singles", "Place": "2nd", "Winner": "Nigel" },
//       { "Event": "Table Tennis Girls Doubles", "Place": "3rd", "Winner": "Nicole Saldanha & Janice" },
//       { "Event": "Chess", "Place": "1st", "Winner": "Dhruvin" },
//       { "Event": "Chess", "Place": "2nd", "Winner": "Sujal" },
//       { "Event": "Chess", "Place": "3rd", "Winner": "Jashith" },
//       { "Event": "Discus Throw Boys", "Place": "1st", "Winner": "Pratik Daga" },
//       { "Event": "Discus Throw Girls", "Place": "1st", "Winner": "Verushka Fernandes" },
//       { "Event": "Shot Put Girls", "Place": "2nd", "Winner": "Verushka Fernandes" },
//       { "Event": "Javelin Throw Girls", "Place": "1st", "Winner": "Verushka Fernandes" },
//       { "Event": "Box Cricket Boys", "Place": "1st", "Winner": "IT" },
//       { "Event": "Box Cricket Girls", "Place": "1st", "Winner": "COMPS" },
//       { "Event": "Basketball Girls", "Place": "1st", "Winner": "Comps" }
//     ],

//     mech: [
//       { "Event": "Table Tennis Boys Singles", "Place": "3rd", "Winner": "Shubham" },
//       { "Event": "Table Tennis Doubles", "Place": "1st", "Winner": "Zreh Kotwal & Shubham Palande" },
//       { "Event": "Table Tennis Doubles", "Place": "2nd", "Winner": "Neel Ved & Priyank Panchal" },
//       { "Event": "Table Tennis Doubles", "Place": "3rd", "Winner": "Yashneil & Abdul" },
//       { "Event": "80m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "80m Boys", "Place": "2nd", "Winner": "Geden Dsouza" },
//       { "Event": "80m Boys", "Place": "3rd", "Winner": "Tyrelles Paires" },
//       { "Event": "200m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "200m Boys", "Place": "2nd", "Winner": "Jaeden" },
//       { "Event": "200m Boys", "Place": "3rd", "Winner": "Adrian Soans" },
//       { "Event": "400m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "400m Boys", "Place": "2nd", "Winner": "Prathamesh Parab" },
//       { "Event": "400m Boys", "Place": "3rd", "Winner": "Jaeden D'Souza" },
//       { "Event": "800m Boys", "Place": "1st", "Winner": "Atharva Kadam" },
//       { "Event": "800m Boys", "Place": "3rd", "Winner": "Jaeden D'Souza" },
//       { "Event": "Relay Boys", "Place": "1st", "Winner": "Mech" },
//       { "Event": "Tug of War Boys", "Place": "2nd", "Winner": "Mech" },
//       { "Event": "VolleyBall Boys", "Place": "1st", "Winner": "MECH" },
//       { "Event": "Kabaddi", "Place": "2nd", "Winner": "Mech" },
//       { "Event": "Javelin Throw Boys", "Place": "1st", "Winner": "Vishwanath" },
//       { "Event": "Shot Put Boys", "Place": "1st", "Winner": "Harjinder Singh" }
//     ],

//     extc: [
//       { "Event": "Singles Carrom", "Place": "1st", "Winner": "Anup" },
//       { "Event": "Singles Carrom", "Place": "3rd", "Winner": "Anuj" },
//       { "Event": "Doubles Carrom", "Place": "1st", "Winner": "Rohith" },
//       { "Event": "200m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "400m Girls", "Place": "1st", "Winner": "Tia Xavier's" },
//       { "Event": "Discus Throw Girls", "Place": "2nd", "Winner": "Simran Ahiwale" },
//       { "Event": "Javelin Throw Girls", "Place": "2nd", "Winner": "Nidhi Kamble" },
//       { "Event": "Tug of War Girls", "Place": "1st", "Winner": "EXTC" },
//       { "Event": "VolleyBall Girls", "Place": "2nd", "Winner": "EXTC" },
//       { "Event": "Rink Football Girls", "Place": "2nd", "Winner": "Comps (Team Grace)" }
//     ],

//     dommf: [
//       { "Event": "80m Girls", "Place": "1st", "Winner": "Chloe Xaviers" },
//       { "Event": "80m Girls", "Place": "2nd", "Winner": "Sofia Nadar" },
//       { "Event": "Relay Girls", "Place": "2nd", "Winner": "DOMF" },
//       { "Event": "Mixed Relay", "Place": "1st", "Winner": "DOMF" },
//       { "Event": "Basketball Boys", "Place": "2nd", "Winner": "Extc" },
//       { "Event": "Rink Football Boys", "Place": "3rd", "Winner": "DOMF" }
//     ],

//     it: [
//       { "Event": "Box Cricket Boys", "Place": "1st", "Winner": "It  " },
//       { "Event": "Tug of War Boys", "Place": "1st", "Winner": "It" },
//       { "Event": "Relay Girls", "Place": "3rd", "Winner": "IT" },
//       { "Event": "Mixed Relay", "Place": "3rd", "Winner": "IT" },
//       { "Event": "Rink Football Boys", "Place": "1st", "Winner": "It" },
//       { "Event": "Javelin Throw Boys", "Place": "3rd", "Winner": "Soham Patil" }
//     ],

//     hs: [
//       { "Event": "Discus Throw Boys", "Place": "2nd", "Winner": "Raj Thombare" },
//       { "Event": "Kabaddi", "Place": "1st", "Winner": "HS" }
//     ],

//     bmm: [
//       { "Event": "80m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "400m Girls", "Place": "3rd", "Winner": "Shivani Sawant" },
//       { "Event": "Relay Girls", "Place": "1st", "Winner": "BMM" },
//       { "Event": "Box Cricket Girls", "Place": "2nd", "Winner": "BMM" },
//       { "Event": "Throwball", "Place": "2nd", "Winner": "BMM" },
//       { "Event": "Basketball Girls", "Place": "3rd", "Winner": "BMM" }
//     ]
//   }
//   }
// ]
