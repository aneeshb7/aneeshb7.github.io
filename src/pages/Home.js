import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Aneesh!</h2>
        <div className="prompt">
          <p>I am a Computer Science and Mathematics student at UBC. 
            I am passionate about software engineering and tackling complex problems.</p>
            <a href = "https://www.linkedin.com/in/aneesh-bulusu/"><LinkedInIcon/></a>
          <a href = "mailto:aneesh.bulusu@gmail.com"><EmailIcon /></a>
          <a href = "https://github.com/aneeshb7"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>
              Java, Python, C/C++, JavaScript/TypeScript, Go, Kotlin, HTML/CSS, GraphQL
            </span>
          </li>
          <li className="item">
            <h2>Frameworks</h2>
            <span>
              React.js, Node.js, Express.js, JUnit, Mocha/Chai, TestCafe
            </span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>Linux, Git,  Docker, Ansible, Postman, MongoDB, Kafka, Jira, VS Code, IntelliJ, AWS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;