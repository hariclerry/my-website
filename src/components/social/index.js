import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"

import { social } from "../../data"

export default () => {
  const Wrapper = styled.div`
    padding: 2rem 0;
  `
  const IconSocial = styled.div`
    display: grid;
    grid-template-columns: 40px 40px 40px 40px;
    gap: 20px;

    @media (max-width: 680px) {
      grid-template-columns: auto auto auto auto;
      gap: 5px;
    }

    .social-link {
      padding: 8px;
      color: #551e6e;
    }

    a.social-link.twitter:hover {
      color: #1da1f2;
    }

    a.social-link.github:hover {
      color: #24292e;
    }

    a.social-link.linkedin:hover {
      color: #0077b5;
    }

    a.social-link.email:hover {
      color: #c23a2b;
    }
  `
  return (
    <Wrapper>
      <IconSocial>
        {social.github && (
          <a className="social-link github" href={social.github}>
            <FaGithub className="social-icon" size="32" />
          </a>
        )}
        {social.linkedin && (
          <a className="social-link linkedin" href={social.linkedin}>
            <FaLinkedin className="social-icon" size="32" />
          </a>
        )}
        {social.twitter && (
          <a className="social-link twitter" href={social.twitter}>
            <FaTwitter className="social-icon" size="32" />
          </a>
        )}
        {social.email && (
          <a className="social-link email" href={`mailto:${social.email}`}>
            <FaEnvelope className="social-icon" size="32" />
          </a>
        )}
      </IconSocial>
    </Wrapper>
  )
}
