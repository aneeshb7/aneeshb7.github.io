import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of British Columbia, Vancouver, British Columbia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Combined Honours in Computer Science and Mathematics</p>
          <p>86.1% CGPA, Dean's Honours List in all years of study</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            QA & Automation Engineer Intern - Incognito Software Systems
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vancouver, BC
          </h4>
          <p>Managed execution of JUnit tests and 
            lead testing of migration of microservices onto GCP</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Quality Assurance Engineer Intern - Optigo Networks
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Burnaby, BC
          </h4>
          <p>
            Reduced backend testing time by 75% by building automated 
            CI/CD pipelines on Jenkins with results automatically published to Zephyr Scale
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;