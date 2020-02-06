import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function FrontPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
        <div className={classNames(classes.container)} >
          <GridContainer justify="flex-end">
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Katriina Heiskanen</h1>
              <h3>
                Software Developer, Problem-solver and Adventure Cyclist
              </h3>
            </GridItem>
          </GridContainer>
        </div>
  );
}
