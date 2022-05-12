import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem 0;
  h2 {
    font: 2rem Optima, sans-serif;
    line-height: 1.6;
    letter-spacing: 0.6px;
    font-style: normal;
    font-weight: 900;
    color: white;
  }
`

export const Content = styled.div`
  padding: 1rem 0;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  font: 17px Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.8px;
  font-style: normal;
  font-size: 1rem;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`

export const Card = styled.div`
  padding: 1rem;
  background-color: rgba(145, 158, 171, 0.08);
  border: 1px solid rgba(145, 158, 171, 0.12);
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  text-decoration: none;
  color: #dfdada;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Content} {
        transition: transform 1s;
        transform: translateY(-5px);
      }
    `}

  p {
    color: #707070;
  }
`
