module.exports = {
  siteTitle: 'Hey! I\'m Harriet!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Harriet Ayugi',
  twitterUsername: 'clerryha',
  githubUsername: 'hariclerry',
  authorAvatar: '/images/harrieta.jpg',
  authorDescription: `I have 3 years of professional experience as a software engineer. While I'm a proficient full-stack JavaScript developer, 
  my focus is on front-end web development to bring the best experience to your users.
    I mainly work with <strong>Javascript, NodeJS and React.</strong>`,
  skills: [
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'React',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'NodeJs',
      level: 60
    },
    {
      name: 'HTML',
      level: 60
    },
    {
      name: 'Python',
      level: 30
    },
    {
      name: 'Flask',
      level: 30
    },
    {
      name: 'MongoDB',
      level: 40
    },
    {
      name: 'PostgreSQL',
      level: 40
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Phaneroo",
      begin: {
        month: 'sep',
        year: '2019'
      },
      duration: null,
      occupation: "Backend developer",
      description: "I am responsible for implementing, developing, testing and documenting a Prayer Requests API which enables members to send their prayer requests."
  
    },  {
      company: "Botkeeper Inc. USA",
      begin: {
        month: 'Feb',
        year: '2019'
      },
      duration: '1 year',
      occupation: "Frontend Developer",
      description: "Responsible for implementation, development, testing, documentation, and deployment of a Report generating application, Bank integration application and Transaction manager."
  
    }, {
      company: "Andela",
      begin: {
        month: 'Apr',
        year: '2018'
      },
      duration: '2 years',
      occupation: "Fullstack developer",
      description: "Responsible for the design, implementation, development, testing, documentation, and deployment of a applications such as Travela, travel management tool"
    }, {
      company: "UICT",
      begin: {
        month: 'October',
        year: '2014'
      },
      duration: '3 years 5 mos',
      occupation: "Part-time Lecturer",
      description: "Responsible for preparing teaching materials and handouts, Delivering lectures and conducting practical lessons on Computer basics, Microsoft office suites, CSS and HTML"
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/clerryha",
    linkedin: "https://www.linkedin.com/in/ayugi-harriet-05744b99",
    github: "https://github.com/hariclerry?tab=repositories",
    email: "clerryha@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/code.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#3b194a',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}