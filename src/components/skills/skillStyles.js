import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem 0;
  h2 {
    font: 2rem Optima, sans-serif;
    line-height: 1.6;
    letter-spacing: 0.6px;
    font-style: normal;
    font-weight: 900;
  }
`

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  gap: 25px;
  font: 17px Optima, sans-serif;
  line-height: 1.4;
  letter-spacing: 0.8px;
  font-style: normal;

  @media (max-width: 960px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const IconDiv = styled.div`
  display: grid;
  grid-template-columns: 20px 20px 20px 20px;
  gap: 20px;

  @media (max-width: 680px) {
    gap: 15px;
  }
`

export const TextDiv = styled.div`
  display: flex;
  width: 200px;
  flex-wrap: wrap;
  padding-top: 5px;
  @media (max-width: 680px) {
    width: auto;
  }

  div p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px !important;
  }

  div span {
    font-size: 0.9rem;
  }
`
