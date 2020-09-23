import React from "react"

import { author } from "../../data"
import Container from "../common/container/containerStyles"
import { Wrapper, Flex, Details } from "./footerStyles"
import Social from "../social"

export default () => (
  <Wrapper>
    <Flex as={Container} id="contact">
      <Details>
          <h4>{`© ${new Date().getFullYear()} ${author}`}</h4>
      </Details>
      <Social />
    </Flex>
  </Wrapper>
)
