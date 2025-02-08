import { FaReact,
  FaSass,
  FaStripe,
  FaNodeJs,
  FaCss3Alt,
  FaAws,
  FaHtml5,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaVideo,
  FaStream,
  FaMap
 } from "react-icons/fa";
 import { SiStyledcomponents , SiRedux, SiChakraui, SiMui, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiMysql} from "react-icons/si";
 import { DiFirebase } from "react-icons/di";
 import { TbBrandReactNative , TbBrandNextjs} from "react-icons/tb";
 import { BiLogoSpringBoot } from "react-icons/bi";
 import { TbBrandCSharp } from "react-icons/tb";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Tech Stack", link: "#stack" },
    { name: "Contact", link: "#contact" },
  ];

  export const stacks = [
    { id: 1, name: "JavaScript", icon: SiJavascript},
    { id: 2, name: "Typescript", icon: SiTypescript},
    { id: 3, name: "ReactJs", icon: FaReact},
    { id: 4,  name: "Redux", icon: SiRedux},
    {  id: 5, name: "NextJs", icon: TbBrandNextjs},
    {  id: 6, name: "React Native", icon: TbBrandReactNative},
    { id: 7, name: "AWS", icon: FaAws},
    {  id: 8, name: "TailWind", icon: SiTailwindcss},
    {  id: 9, name: "Chakra UI", icon: SiChakraui},
    { id: 10, name: "CSS", icon: FaCss3Alt},
    {  id: 11, name: "HTML", icon: FaHtml5},
    {  id: 112, name: "Bootstrap", icon: FaBootstrap},
    {  id: 13, name: "Material UI", icon: FaBootstrap},
    {  id: 14, name: "Firebase", icon: DiFirebase},
    { id: 15, name: "Nodejs & ExpressJs", icon: FaNodeJs},
    {  id: 16, name: "MongoDB", icon: SiMongodb},
    {  id: 17, name: "MySQL", icon: SiMysql},
    {  id: 18, name: "Git & Github", icon: FaGithub},
    {  id: 19, name: "Java", icon: FaJava},
    {  id: 20, name: "Spring Boot", icon: BiLogoSpringBoot},
    {  id: 21, name: "C#", icon: TbBrandCSharp},
  ];

  export const projects =
  
    [
      {
        id: 1,
        title: "Property Rental app",
        img: "https://i.ibb.co/pB19Cy3d/property-dark-home.png",
        description: "An App that connects property owners with renters. Built using React.js, Next.js, MongoDB, Tailwind CSS, Google Auth, Mapbox, ",
        url: "https://lease-link-properties-one.vercel.app/",
        iconLists: [FaReact, TbBrandNextjs, SiTailwindcss, FaMap, FaNodeJs],
      },
      {
        id: 2,
        title: "Video conferencing app",
        img: "https://i.ibb.co/d29z5wH/sync-app-profile.png",
        description: "A video conferencing app built using ReactJs, Chakra UI, Clerk Auth, Stream Video API, NodeJs and ExpressJs",
        url: "https://sync-room-video-app.onrender.com/",
        iconLists: [SiJavascript, FaReact, SiChakraui, FaVideo, FaStream, FaNodeJs],
      },
    
      {
        id: 3,
        title: "E-commerce site",
        img: "https://i.ibb.co/LQrh13g/Screenshot-2020-09-22-at-23-40-33.png",
        description: "An online fashion store which enable users to shop online. It's built using React.js, Sass, Styled components, Redux/Saga, Firebase, Stripe API integration with Node.js",
        url: "https://clerry-clothing-store.onrender.com/",
        iconLists: [SiJavascript, FaReact, SiStyledcomponents, SiRedux, FaStripe, DiFirebase,FaSass, FaNodeJs],
      },

      {
        id: 4,
        title: "Game discovery APP",
        img: "https://i.ibb.co/tJ96MYD/game-hub-dark.png",
        description: "An app that helps you find new and interesting games to play. Built from RAWG API, Zustand, ReactJs, Chakra UI and React query.",
        url: "https://game-discovery-app-jet.vercel.app/",
        iconLists: [SiJavascript, FaReact, SiChakraui, SiRedux],
      },
   
      {
        id: 5,
        title: "Mobile marketplace app",
        img: "https://i.ibb.co/ySTTqPR/native-collage.jpg",
        description: "An app which enable users to sell the interior accessories that they no longer need, built using React native runs on both IOS and Andriod mobile devices",
        url: "https://github.com/hariclerry/smart-Interior-react-native/",
        iconLists: [SiJavascript, TbBrandReactNative,  FaCss3Alt, FaNodeJs],
      },
      {
        id: 6,
        title: "Market place app",
        img: "https://i.ibb.co/MhDdmXt/Screenshot-2020-09-22-at-07-19-30.png",
        description: "An app which enables users who want to sell or buy products online to do so. It's built using AWS Amplify, AWS Cognito, React.js, AWS Appsync, AWS S3 and Stripe API integration using AWS lambda function.",
        url: "http://amplifykatale-marketplace-app-dev.s3-website.us-east-2.amazonaws.com/",
        iconLists: [SiJavascript, FaReact, FaAws, FaStripe],
      }
    ]