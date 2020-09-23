import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Wrapper } from "./navbarLinkStyles"

export default ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#skills">Skills</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)
