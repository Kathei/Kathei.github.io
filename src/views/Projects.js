import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/projectsStyle.js";

import { Web, Forum, ImportantDevices, InsertChartOutlined, ArtTrack, Transform } from "@material-ui/icons";


const useStyles = makeStyles(styles);

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Projects</h2>
          <h5 className={classes.description}>
            During the last seven years, I have finished many different development projects at work, at university and in free time. Here is a collection of the highlights.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SPA with React, Material Kit and LinkedIn API"
              description="It's this website you are looking at right now! The code is available in GitHub."
              icon={ImportantDevices}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blog with WordPress and React"
              description="WORK IN PROGRESS! Currently I am in the middle of creating my own blog with React and WordPress. You can follow my progress from GitHub."
              icon={ArtTrack}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Master's Thesis: Parametric Modelling in Website Design"
              description="Lorem ipsum"
              icon={InsertChartOutlined}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web service with Django and AngularJS"
              description="Somekratia is a platform for discussing public decisions made by the city of Helsinki. It is built as a single-page application with AngularJS and Django, and uses the Open Ahjo API provided by the city of Helsinki. This was a group project in a univerisity course. I contributed to the project as a full-stack developer. The code is available in GitHub."
              icon={Forum}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="New layout for Mascus.com"
              description="As my first big project for Mascus, I implemented the new layout with C#, HTML, CSS and JQuery. Examples of the old layout can be found from here and here. The current website can be found from here."
              icon={Web}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Custom ServiceNow Application"
              description="Lorem ipsum"
              icon={Transform}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
        </div>
      </div>
  );
}
