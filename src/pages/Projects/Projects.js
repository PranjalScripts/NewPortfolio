import React from "react";
import "./Projects.css";
import { Fade, Bounce } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <Bounce triggerOnce>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            TOP RECENT PROJECTS
          </h2>
          <hr />
          <p className="pb-3 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
            odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
            delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
            nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
            voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
          </p>
        </Bounce>
        {/* card design */}
        <div className="row" id="ads">
          <Fade cascade damping={0.1} direction="down">
            <div className="row">
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img
                      src="./hisaabkaro.png"
                      alt="Screenshot-2025-03-13-at-1-22-21-AM"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">react</span>
                    <span className="card-detail-badge">Mongodb</span>
                    <span className="card-detail-badge">FCM</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">
                        Hisaabkaro An Expense Management App
                      </h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://hisaabkaro.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Web App</span>
                    <img src="./CRM.png" alt="project2" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">MERN Stack</span>
                    <span className="card-detail-badge">Socket.io</span>
                    <span className="card-detail-badge">FCM</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">
                        A business CRM web app manges with client and leads
                      </h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://crm.pizeonfly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Daily Tools</span>
                    <img src="./OnlineTools.png" alt="project1" />
                  </div>
                  <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">HTML</span>
                    <span className="card-detail-badge">Javsacript</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h6 className="text-uppercase">
                        Online Tools - records screen, sounds, create notes, etc
                      </h6>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://firstindiacredit-git.github.io/tools-Collection/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
