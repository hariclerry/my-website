import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Item } from "react-flex-ready"

import { Wrapper, Content, Stats, Card } from "./projectStyles"
import Container from "../common/container/containerStyles"

export default () => {
  const {
    content: {
      frontmatter: { portifolio },
    },
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { section: { eq: "projects" } }) {
        frontmatter {
          portifolio {
            projectImage
            description
            url
          }
        }
      }
    }
  `)
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Flex col={4}>
        {portifolio.map(({ url, projectImage, description }) => (
          <Item
            col={4}
            colTablet={6}
            colMobile={12}
            marginBottom={30}
            gap={1}
            stretch
          >
            <Card as="a" href={url} target="_blank" rel="noopener noreferrer">
              <Content>
                <img src={projectImage} alt="forks" />
              </Content>
              <Stats>{description}</Stats>
            </Card>
          </Item>
        ))}
      </Flex>
    </Wrapper>
  )
}
