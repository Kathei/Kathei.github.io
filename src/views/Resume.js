import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import VerticalTimeline from "components/VerticalTimeline/VerticalTimeline.js";
import VerticalTimelineElement from "components/VerticalTimeline/VerticalTimelineElement.js";
import { Work, School, Star } from "@material-ui/icons";

import "react-vertical-timeline-component/style.min.css"


import styles from "assets/jss/material-kit-react/views/projectsStyle.js";
import Badge  from "components/Badge/Badge.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

        <div className={classes.section}>
        
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Career and studies</h2>
        </GridItem>
      </GridContainer>
    
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="Aug 2018 - Nov 2019"
    iconStyle={{ background: '#00acc1', color: '#fff' }}
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
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="Jan 2018 - Jul 2018"
    iconStyle={{ background: '#00acc1', color: '#fff' }}
    icon={<Work />}
  >
    <Badge color="info">.Net</Badge>
    <Badge color="info">C#</Badge>
    <Badge color="info">CMS</Badge>
    <Badge color="info">JQuery</Badge>
    <Badge color="info">HTML</Badge>
    <Badge color="info">CSS</Badge>
    <Badge color="info">Integrations</Badge>
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Mascus Finland oy</h4>
    <p>
    Mascus is a B2B sales platform for used heavy machinery. I designed a new solution for creating websites for customers as my Master's thesis project. I developed a parametric model of  the websites based on customers' and technical requirements. The websites are generated in a CMS based on the defined parameters sent via REST API. In addition to the thesis project, I continued my previous work as a conversion specialist and participated in other software development projects when needed. </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
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
    className="vertical-timeline-element--work"
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="Sep 2015 - Dec 2017"
    iconStyle={{ background: '#00acc1', color: '#fff' }}
    icon={<Work />}
  >
    <Badge color="info">.Net</Badge>
    <Badge color="info">C#</Badge>
    <Badge color="info">JQuery</Badge>
    <Badge color="info">HTML</Badge>
    <Badge color="info">CSS</Badge>
    <Badge color="info">Conversion Optimization</Badge>
    <h3 className="vertical-timeline-element-title">Conversion Specialist</h3>
    <h4 className="vertical-timeline-element-subtitle">Mascus Finland Oy</h4>
    <p>
    I successfully increased conversion rates in Mascus B2B sales website as a conversion specialist. I designed and implemented A/B tests with Optimizely, interpreted the test results and made changes to the website accordingly. I also worked as a software developer in both in-house and customer projects using C# (.Net v4), JavaScript (jQuery), HTML and CSS.  
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
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
    className="vertical-timeline-element--education"
    contentStyle={{color: '#3C4858' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="Feb - Jun 2015"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<School />}
  >
    <h3 className="vertical-timeline-element-title">Exchange Studies</h3>
    <h4 className="vertical-timeline-element-subtitle">Griffith University</h4>
    <p>
    Web Design and Development<br/>Digital Graphic Design<br/>Comparative Management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#9c27b0', color: '#fff' }}
    icon={<Star />}
  />
</VerticalTimeline>

          </div>
        </div>
      </div>
  );
}
