import React from "react"

import { author } from "../../data"
import Container from "../common/container/containerStyles"
import { Wrapper, Flex, Details, ContactDetails } from "./footerStyles"
import Social from "../social"

export default () => (
  <Wrapper>
    <Flex as={Container} id="contact">
      <ContactDetails>Contact or connect with me!</ContactDetails>
      <Social />
      <Details>
        <h4>{`© ${new Date().getFullYear()} ${author}`}</h4>
      </Details>
    </Flex>
  </Wrapper>
)
