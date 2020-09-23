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

export const RepositoriesContent = styled.div`
  position: relative;
  margin-bottom: 40px;
`

export const RepositoriesRepo = styled.div`
  position: relative;
`

export const RepoLink = styled.div`
  font: 22px Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.6px;
  font-style: normal;
  a {
    text-decoration: none;
    color: #3b3a39;
    display: flex;
    align-items: center;
  }
`
export const RepoUserLink = styled.div`
  display: flex;
  justify-content: flex-end;
  font: 20px Optima, sans-serif;
  line-height: 1.4;
  letter-spacing: 0.6px;
  font-style: italic;
  a {
    text-decoration: none;
    color: #03befc;
    display: flex;
    align-items: center;
  }
  a:hover {
    text-decoration: underline;
  }
`
export const RepoDate = styled.div`
  font: 12px Optima, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.6px;
  font-style: normal;
`

export const RepoStar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`
export const RepoLoader = styled.div`
  display: flex;
`

export const HrRule = styled.hr`
  margin-top: 16px;
  background-color: gray;
  opacity: 0.2;
`

export const RepoDescription = styled.div`
  font: 18px Optima, sans-serif;
  line-height: 1.4;
  letter-spacing: 0.6px;
  font-style: normal;
`
