import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 12rem 0 4rem 0;

  @media (max-width: 960px) {
    padding: 10rem 0 4rem;
  }

  @media (max-width: 660px) {
    padding: 10rem 0 4rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }
`

export const Details = styled.div`
    font: 1.5rem Optima, sans-serif;
    line-height: 1.6;
    letter-spacing: 0.6px;
    font-style: normal;
    font-weight: 900;
  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }
`
