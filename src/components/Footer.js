import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href = "https://www.linkedin.com/in/aneesh-bulusu/"><LinkedInIcon/></a>
        <a href = "mailto:aneesh.bulusu@gmail.com"><EmailIcon /></a>
        <a href = "https://github.com/aneeshb7"><GithubIcon /></a>
      </div>
      <p> &copy; Aneesh Bulusu</p>
    </div>
  );
}

export default Footer;