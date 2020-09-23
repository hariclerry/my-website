import styled from "styled-components"

export const Wrapper = styled.div`
  /* background-position: right top; */
  /* background-repeat: no-repeat; */
  padding: 5rem 0 4rem 0;
  background-color: #efeeff;
  margin-top: 120px;

  @media (max-width: 960px) {
    padding: 10rem 0 4rem;
  }

  @media (max-width: 660px) {
    padding: 10rem 0 4rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 680px) {
    text-align: center;
    align-items: center;
  }
`

export const Details = styled.div`
  font: 1.3rem Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.6px;
  font-style: normal;
  font-weight: 900;
  @media (max-width: 680px) {
    margin-bottom: 1rem;
  }
`

export const ContactDetails = styled.div`
  font: 2rem Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.6px;
  font-style: normal;
  font-weight: 900;
`
