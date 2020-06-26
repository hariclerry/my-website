module.exports = {
  siteTitle: 'Hey! I\'m Harriet!',
  siteDescription: `Browse to get to know me better`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Harriet Ayugi',
  twitterUsername: 'clerryha',
  githubUsername: 'hariclerry',
  authorAvatar: '/static/images/harrieta.jpg',
  authorDescription: `I have 3 years of professional experience as a software engineer. While I'm a proficient full-stack JavaScript developer, 
  my focus is more on front-end web development, I love to bring the best experience to users.`,
  skills: [
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'React',
      level: 60
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
      level: 60
    },
    {
      name: 'Gatsby',
      level: 20
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Phaneroo",
      begin: {
        month: 'Feb',
        year: '2020'
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
        month: 'Oct',
        year: '2014'
      },
      duration: '3 years 5 mos',
      occupation: "Part-time Lecturer",
      description: "Responsible for preparing teaching materials and handouts, Delivering lectures and conducting practical lessons on Computer basics, Microsoft office suites, CSS and HTML"
  
    },
  ],
  portifolio: [
    {
      image: "/static/images/book_management.png",
      description: "A book management app",
      url: "http://book-management-app-frontend.herokuapp.com/"
    },
    {
      image: "/static/images/sms_management_app.png",
      description: "A sms management app",
      url: "https://modest-ritchie-12684e.netlify.app/"
    },
    {
      image: "/static/images/tribute_page.png",
      description: "A tribute page",
      url: "https://hariclerry.github.io/"
    },
    {
      image: "/static/images/landing_page.png",
      description: "A simple product landing page",
      url: "https://hariclerry.github.io/product-landing-page.html"
    },
    {
      image: "/static/images/documententation_page.png",
      description: "A simple documentation page",
      url: "https://hariclerry.github.io/documentation-page.html"
    },
    {
      image: "/static/images/gatsby-starter-cv.png",
      description: "Change this",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
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
  pathPrefix: '/personal-website', // Note: it must *not* have a trailing slash.
  siteCover: '/static/images/code.jpg',
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#3b194a',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: '/static/images/harrieta.jpg',
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