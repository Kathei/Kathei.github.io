import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/projectsStyle.js";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import PhonelinkRing from "@material-ui/icons/PhonelinkRing";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
export default function Contact(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Contact Me</h2>
                <h5 className={classes.description}>
                I am always open for new interesting projects and career possibilities. Feel free to send me an email or give me a call! <br/><br/><br/>
                </h5>
                </GridItem>
            </GridContainer>
                <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                    title="heiskanen.katriina@gmail.com"
                    icon={MailOutline}
                    iconColor="info"
                    vertical
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                    title="+61 431 910 225"
                    icon={PhonelinkRing}
                    iconColor="info"
                    vertical
                    />
                </GridItem>
            </GridContainer>
        </div>
      </div>
      </div>
      
  );
}
