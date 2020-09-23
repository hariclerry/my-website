import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Container from "../common/container/containerStyles"
import Social from "../social"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./introStyles"

export default () => {
  const {
    content: {
      frontmatter: { title, description, profileImage },
    },
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "intro" } }) {
        frontmatter {
          title
          description
          profileImage
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h2>{title}</h2>
          <p>{description}</p>
          <Social />
        </Details>
        <Thumbnail>
          <img src={profileImage} alt="profileImage" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
