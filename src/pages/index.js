import React, { Fragment } from 'react'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Repositories from '../components/repositories'
import Footer from '../components/footer'
import { Global } from '../components/common/container/globalStyles'

export default () => (
  <Fragment>
    <Global />
    <Intro />
    <Projects />
    <Skills />
    <Repositories />
    <Footer />
  </Fragment>
)
