import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
 body {
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
}

* {
  box-sizing: border-box;
}
`
