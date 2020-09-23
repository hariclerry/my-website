import React, { Component, Fragment } from "react"
import { GoStar, GoLinkExternal, GoRepoForked } from "react-icons/go"

import Container from "../common/container/containerStyles"
import { githubUsername } from "../../data"
import {
  RepositoriesContent,
  RepositoriesRepo,
  RepoLink,
  RepoUserLink,
  RepoStar,
  RepoDate,
  HrRule,
  Wrapper,
  RepoDescription,
} from "./repoStyles"

const endpoint = `https://api.github.com/users/${githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

class Repositories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      status: "loading",
    }
  }
  async componentDidMount() {
    const repos = await fetch(endpoint)
    const results = await repos.json()
    if (results && results.length) {
      this.setState({ repos: results, status: "ready" })
    }
  }
  render() {
    return (
      <Wrapper as={Container}>
        <h2>Latest repositories on Github</h2>
        {this.state.repos && (
          <Fragment>
            <RepositoriesContent>
              {this.state.repos.map(repo => (
                <React.Fragment key={repo.name}>
                  <RepositoriesRepo>
                    <RepoLink>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <strong>{repo.name}</strong>
                      </a>
                    </RepoLink>
                    <RepoDescription>{repo.description}</RepoDescription>
                    <RepoDate>
                      Updated: {new Date(repo.updated_at).toUTCString()}
                    </RepoDate>
                    <RepoStar>
                      {repo.fork && <GoRepoForked />}
                      <GoStar /> {repo.stargazers_count}
                    </RepoStar>
                  </RepositoriesRepo>
                  <HrRule />
                </React.Fragment>
              ))}
            </RepositoriesContent>
            <RepoUserLink>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                See all my repositories
                <GoLinkExternal style={{ marginLeft: 8 }} />
              </a>
            </RepoUserLink>
          </Fragment>
        )}
      </Wrapper>
    )
  }
}

export default Repositories
