import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/pageStyle";
import img from "assets/img/Heiskanen_Katriina_2_1.jpg";


const useStyles = makeStyles(styles);

export default function AboutMe(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={3} className={classes.itemGrid}>
                <img src={img} alt="..." className={imageClasses} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hi, I'm Katriina!</h2>
          <h5 className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in viverra orci, et auctor mi. Quisque interdum augue vitae massa pharetra, sed tristique dui laoreet. Integer dignissim ex ut facilisis volutpat. Donec lorem erat, pharetra at consequat eu, dictum vel nisl. Aliquam pellentesque mauris tristique, dignissim quam sed, sollicitudin libero. Aenean nec risus odio. Nam in est ultricies, dignissim mauris nec, vestibulum nulla. Aenean gravida sem sapien, eu sagittis mi condimentum quis. In hac habitasse platea dictumst. Duis iaculis, risus eget ultricies sodales, velit nisl condimentum odio, rutrum imperdiet dui quam et libero. Aenean turpis lorem, efficitur vel efficitur dapibus, bibendum vel libero. Suspendisse placerat pretium vestibulum.
<br /> <br />
Nullam tristique nulla in felis fringilla, sit amet pharetra quam sodales. Donec leo elit, vehicula non metus convallis, dictum pretium dolor. Curabitur gravida varius commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eget pretium dui. Praesent sit amet aliquam massa. Quisque sodales porta tortor, sit amet sollicitudin est auctor ac. Praesent aliquam lectus justo, a accumsan urna viverra quis. Quisque blandit lorem ut urna dignissim, ac suscipit quam porta. In faucibus arcu erat, vel lacinia elit iaculis in. Integer vitae tortor in magna tincidunt elementum. Nullam id tristique enim. Ut fringilla nec enim sit amet varius. Pellentesque sodales ipsum at massa imperdiet, quis hendrerit lectus hendrerit.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
        </div>
      </div>
  );
}
