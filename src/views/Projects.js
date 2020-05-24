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
import Button from "components/CustomButtons/Button.js";


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
              title="CURRENT PROJECT: Blog app with React, Node and MongoDB"
              description="I have just started coding my own blog with Material-UI, React, Express/Node and MongoDB. The current version with limited functionality can be checked from GitHub. Work in progress!"
              icon={ArtTrack}
              iconColor="info"
              vertical
            />
            <Button
                        href="https://github.com/Kathei/Blog-app"
                        target="_blank"
                        color="default"
                        
                      >
                        View in GitHub
                      </Button>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SPA with React and Material UI"
              description="This website you are looking at right now is my first React project. It is developed using Material Kit React."
              icon={ImportantDevices}
              iconColor="info"
              vertical
            />
            <Button
                        href="https://github.com/Kathei/portfolio-react"
                        target="_blank"
                        color="default"
                        
                      >
                        View in GitHub
                      </Button>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Custom ServiceNow Application"
              description="I worked as a developer in a team that successfully delivered custom ServiceNow applications for Finavia (Finnish airport operator owned by the Goverment of Finland) digitising their complicated airport security processes with strict privacy and security regulations."
              icon={Transform}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Master's Thesis: Parametric Modelling in Website Design"
              description="I designed a new solution for creating websites for customers as my Master's thesis project. I developed a parametric model of the websites based on customers' and technical requirements. The websites are generated in a CMS based on the defined parameters sent via REST API. You can read about the research and the results in my Master's Thesis"
              icon={InsertChartOutlined}
              iconColor="info"
              vertical
            />
            <Button
                        href="https://www.dropbox.com/s/bjrrxp5jyu4x662/master_Heiskanen_Katriina_2018.pdf"
                        target="_blank"
                        color="default"
                        
                      >
                        View Thesis
                      </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web service with Django and AngularJS"
              description="Somekratia is a platform for discussing public decisions made by the city of Helsinki. It is built as a single-page application with AngularJS and Django, and uses the Open Ahjo API provided by the city of Helsinki. This was a group project in a univerisity course. I contributed to the project as a full-stack developer."
              icon={Forum}
              iconColor="info"
              vertical
            />
            <Button
                        href="https://github.com/Kathei/somekratia"
                        target="_blank"
                        color="default"
                        
                      >
                        View in GitHub
                      </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="New layout for Mascus.com"
              description="As my first big project at my first IT job, I implemented the new layout for Mascus.com with C#, HTML, CSS and JQuery based on the sketches by the designer."
              icon={Web}
              iconColor="info"
              vertical
            />
            <Button
                        href="https://www.mascus.com"
                        target="_blank"
                        color="default"
                      >
                        Visit Mascus.com
                      </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
        </div>
      </div>
  );
}
