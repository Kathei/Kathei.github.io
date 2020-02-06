import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import VerticalTimeline from "components/VerticalTimeline/VerticalTimeline.js";
import VerticalTimelineElement from "components/VerticalTimeline/VerticalTimelineElement.js";
import 'react-vertical-timeline-component/style.min.css';
import { Web, Forum, ImportantDevices, InsertChartOutlined, ArtTrack, Transform, Work, School, Star } from "@material-ui/icons";

// @material-ui/icons


import styles from "assets/jss/material-kit-react/views/pageStyle.js";
import Badge  from "components/Badge/Badge.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Resume(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

        <div className={classes.section}>
        
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Resume</h2>
          <h5 className={classes.description}>
            Lorem ipsum
          </h5>
        </GridItem>
      </GridContainer>
    
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Aug 2018 - Nov 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Work />}
  >
    <Badge color="info">ServiceNow</Badge>
    <Badge color="info">JavaScript</Badge>
    <Badge color="info">Process Design</Badge>
    <Badge color="info">ITSM</Badge>

    <h3 className="vertical-timeline-element-title">ServiceNow Consultant (Junior Advisor)</h3>
    <h4 className="vertical-timeline-element-subtitle">Sofigate Services oy</h4>
    <p>
    Sofigate is a Finnish pioneer in business technology and IT management consulting. As a part of the ServiceNow roll-out team, I successfully delivered multiple business and security process digitization and automation projects built with ServiceNow. My work tasks included software development in a team, process design, requirements gathering, test management and technical reporting.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Jan 2018 - Jul 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Work />}
  >
    <Badge color="info">.Net</Badge>
    <Badge color="info">CMS</Badge>
    <Badge color="info">JQuery</Badge>
    <Badge color="info">HTML</Badge>
    <Badge color="info">CSS</Badge>
    <Badge color="info">Integrations</Badge>
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Mascus Finland oy</h4>
    <p>
    I designed a new solution for creating full websites for customers as my Master's thesis project. I developed a parametric model for the websites based on customers' and technical requirements. The websites are generated using Voog API based on the defined parameters. In addition to the thesis project, I continued my previous work with A/B tests and full-stack web development.    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Sep 2015 - Dec 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Work />}
  >
    <Badge color="info">.Net</Badge>
    <Badge color="info">JQuery</Badge>
    <Badge color="info">HTML</Badge>
    <Badge color="info">CSS</Badge>
    <Badge color="info">Conversion Optimization</Badge>
    <h3 className="vertical-timeline-element-title">Conversion Specialist</h3>
    <h4 className="vertical-timeline-element-subtitle">Mascus Finland Oy</h4>
    <p>
    My main responsibility at Mascus was designing and implementing A/B tests with Optimizely. In addition to that, I have developed the front-end in many customer projects, built the new layout for Mascus website and done many other small front-end and full-stack tasks.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<School />}
  >
    <h3 className="vertical-timeline-element-title">Master of Science (Technology)</h3>
    <h4 className="vertical-timeline-element-subtitle">Aalto University | Degree programme in Information Networks</h4>
    <p>
      Major: ICT in Business<br />
Minor: Web Technologies, Applications and Science<br /><br />

Master's Thesis: Parametric Modelling in Website Design: A Solution for Efficient Requirements Specification and Fast Development (4/5)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2012 - 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<School />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science (Technology)</h3>
    <h4 className="vertical-timeline-element-subtitle">Aalto University | Degree programme in Information Networks</h4>
    <p>
    Major: Media
    <br />
Minor: Work Psychology and Leadership
<br/>
Bachelor's Thesis: The Effects of Shared Leadership on Team Performance (5/5)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<Star />}
  />
</VerticalTimeline>

          </div>
        </div>
      </div>
  );
}
