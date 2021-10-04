import React, { useEffect } from "react";
import projects from "../Assets/data";
import "../styles/Projects.css";
// import Project from "./Project";
import profile from '../Assets/content-wirting/profile.jpg'

const Projects = () => {
  return (
    <div id="Projects" className="Projects">
      <div className="Project_Img">
          <img src={profile} alt="" />
      </div>
      <div className="Project_Detail">
        <h1>About Me</h1>
        <p>
        I am a freelance content writer with two years of company experience and nearly one year notched at my own desk. While I have wrestled words since 2018, my prior company days were spent wistfully building the muscle to do just that. All while gaining perspective that helped me becomes the strategy-powered scribbler I am today.
        </p>
        <br /><br />
        <p>
        The content I write will park itself here over time. Meanwhile, work samples are free to all who email and ask nicely.
        </p>
        <br /><br />
        <p>Contact: <span>info@jawwadshahid.com</span></p>
      </div>
      {/* <h1>
        My Recent <span>Projects</span>{" "}
      </h1>
      <div className="Projects__Gallery">
        {projects.map((project) => (
          <Project
            left={project.left == true ? true : false}
            right={project.left == true ? false : true}
            project={project}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
