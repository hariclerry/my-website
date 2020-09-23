import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding-top: 15px;
  }

  @media (max-width: 660px) {
    flex-direction: column-reverse;
    padding-top: 15px;
  }
`

export const HeaderTitle = styled.h1`
  font: 2rem Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.6px;
  font-style: normal;
  font-weight: 900;

  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`
