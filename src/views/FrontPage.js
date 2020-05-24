import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPage";

const useStyles = makeStyles(styles);

export default function FrontPage() {
  const classes = useStyles();
  return (
        <div className={classNames(classes.container)} >
          <GridContainer justify="flex-end">
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Katriina Heiskanen</h1>
              <h3 className={classes.subtitle}>
                Software Developer and Adventure Cyclist
              </h3>
            </GridItem>
          </GridContainer>
        </div>
  );
}
