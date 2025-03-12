import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://i.ibb.co/hJSnF7yv/Pranjal.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I’m Pranjal Tiwari, a passionate Full Stack Developer
                specializing in the MERN stack, database management, and API
                integrations. With hands-on experience in building scalable web
                applications, I focus on crafting efficient, high-performance
                solutions that enhance business operations. My expertise lies in
                developing SaaS platforms, CRM solutions, and invoice management
                systems, optimizing workflows through automation and real-time
                notifications. I thrive on solving complex problems, writing
                clean and maintainable code, and staying ahead of the latest
                technology trends. I aspire to lead impactful tech projects,
                contribute to open-source communities, and eventually build my
                own SaaS product to help businesses streamline their digital
                processes. Let’s connect and build something amazing together!
                🚀
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
