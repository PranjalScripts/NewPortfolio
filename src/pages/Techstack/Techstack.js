import React from "react";
import "./Techstack.css";
import { Fade, Bounce } from "react-awesome-reveal";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  // Create chunks of 4 items for the grid layout
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const techStackRows = chunkArray(TechstackList, 4);

  return (
    <>
      <div className="container techstack" id="techstack">
        <Bounce triggerOnce>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </Bounce>
        {techStackRows.map((row, rowIndex) => (
          <Fade key={rowIndex} cascade damping={0.1} direction="right">
            <div className="row mb-3">
              {row.map((tech) => (
                <div key={tech._id} className="col-md-3 col-sm-6">
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="alig-self-center">
                            <tech.icon className="tech-icon" />
                          </div>
                          <div className="media-body">
                            <h5>{tech.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default Techstack;
