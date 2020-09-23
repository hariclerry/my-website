import React from "react"

import { defaultTitle } from "../../../data"
import Container from "../../common/container/containerStyles"
import NavbarLinks from "../navbarLinks"
import { Wrapper, HeaderTitle } from "./navbarStyles"

export default () => (
  <Wrapper as={Container}>
    <HeaderTitle>{defaultTitle}</HeaderTitle>
    <NavbarLinks desktop />
  </Wrapper>
)
