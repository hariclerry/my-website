import React from "react"
import {
  FaBootstrap,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa"
import {
  SiGatsby,
  SiRedux,
  SiApollographql,
  SiAmazonaws,
  SiServerless,
  SiMongodb,
  SiPostgresql,
  SiGitlab,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"

import Container from "../common/container/containerStyles"
import { Wrapper, SkillWrapper, IconDiv, TextDiv } from "./skillStyles"

const Skills = () => {
  return (
    <Wrapper as={Container} id="skills">
      <h2>Skills</h2>
      <SkillWrapper>
        <div>
          <IconDiv>
            <SiJavascript
              className="skills-icon"
              size="30"
              style={{ marginRight: "12px" }}
            />
            <SiTypescript
              className="skills-icon"
              size="30"
              style={{ color: "#55a2e6" }}
            />
          </IconDiv>

          <TextDiv>
            <div>
              <p>JavaScript & TypeScript</p>
              <span>
                I have extensive experience working with and building
                applications using JavaScript/TypeScript.
              </span>
            </div>
          </TextDiv>
        </div>

        <div>
          <IconDiv>
            <FaHtml5
              className="skills-icon"
              size="30"
              style={{ color: "orange" }}
            />
            <FaCss3Alt
              className="skills-icon"
              size="30"
              style={{ color: "#66c2ff" }}
            />
            <FaSass
              className="skills-icon"
              size="30"
              style={{ color: "pink" }}
            />
            <FaBootstrap
              className="skills-icon"
              size="30"
              style={{ color: "#1aa3ff" }}
            />
          </IconDiv>

          <TextDiv>
            <div>
              <p>HTML, CSS & Saas, Bootsrap</p>
              <span>
                I have extensive experience working with and building
                applications using HTML, CSS & Saas, Bootsrap.
              </span>
            </div>
          </TextDiv>
        </div>
        <div>
          <IconDiv>
            <FaNodeJs
              className="skills-icon"
              size="30"
              style={{ color: "#07ad5d" }}
            />
          </IconDiv>

          <TextDiv>
            <div>
              <p>Node.js & Express.js</p>
              <span>
                I have worked extensively with Node.js to build scalable REST
                APIs.
              </span>
            </div>
          </TextDiv>
        </div>
        <div>
          <IconDiv>
            <FaReact
              className="skills-icon"
              size="30"
              style={{ color: "#66c2ff" }}
            />
            <SiGatsby
              className="skills-icon"
              size="26"
              style={{ color: "#754bbd" }}
            />
            <SiRedux
              className="skills-icon"
              size="30"
              style={{ color: "#754bbd" }}
            />
            <SiApollographql
              className="skills-icon"
              size="30"
              style={{ color: "#1aa3ff" }}
            />
          </IconDiv>
          <TextDiv>
            <div>
              <p>React.js, Gatsby, Redux & Graphql/apollo client</p>
              <span>
                I have worked extensively with React.js and Redux to build both
                SPA PWA applications. I have also built projects using Gatsby
                and apollo client.
              </span>
            </div>
          </TextDiv>
        </div>
        <div>
          <IconDiv>
            <SiAmazonaws
              className="skills-icon"
              size="30"
              style={{ color: "orange" }}
            />
            <SiServerless className="skills-icon" size="30" />
          </IconDiv>

          <TextDiv>
            <div>
              <p>AWS & Serverless framework</p>
              <span>
                I have built applications using AWS services/tools such as
                Amplify framework, S3 buckets, DynamoDB, EC2, Lambda, App sync,
                RDS, Elastic Beanstalk.
              </span>
            </div>
          </TextDiv>
        </div>
        <div>
          <IconDiv>
            <SiMongodb
              className="skills-icon"
              size="30"
              style={{ color: "#07ad5d" }}
            />
            <SiPostgresql
              className="skills-icon"
              size="30"
              style={{ color: "#035487" }}
            />
          </IconDiv>
          <TextDiv>
            <div>
              <p>MongoDB & Postgres</p>
              <span>
                I have extensively used and worked with both SQL and NoSQl
                databases such as MongoDB & Postgres
              </span>
            </div>
          </TextDiv>
        </div>
        <div>
          <IconDiv>
            <FaGithub className="skills-icon" size="30" />
            <SiGitlab
              className="skills-icon"
              size="30"
              style={{ color: "orange" }}
            />
          </IconDiv>
          <TextDiv>
            <div>
              <p>Git, Gitlab & Github</p>
              <span>
                I have extensively used Git, Gitlab & Github as code hosting
                platform for version control and collaboration.
              </span>
            </div>
          </TextDiv>
        </div>
      </SkillWrapper>
    </Wrapper>
  )
}
export default Skills
