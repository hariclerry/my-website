import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Repositories from "../components/repositories"
import Footer from "../components/footer"
// import { Global } from "../components/common/container/globalStyles"

const IndexPage = () => (
  <Layout>
    <SEO title="Harriet" />
    <Intro />
    <Projects />
    <Skills />
    <Repositories />
    <Footer />
  </Layout>
)

export default IndexPage
