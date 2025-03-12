import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              JSS Academy of Technical Education, Noida
            </h4>
            <p className="vertical-timeline-element-marks">CGPA: 8.29/10</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc</h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Allahabad
            </h4>
            <p className="vertical-timeline-element-marks">Percentage: 85.85%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Inter College, Sitapur
            </h4>
            <p className="vertical-timeline-element-marks">Percentage: 77.6%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Inter College, Sitapur
            </h4>
            <p className="vertical-timeline-element-marks">Percentage: 85.83%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
