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
          For me, the most important thing in software development is the possibility to combine very different kinds of skills: logic and creativity, research and implementation, independent decision-making and teamwork. The most interesting projects require applying knowledge from different fields to one task. I love solving problems and learning new things, which are endless in the constantly evolving software scene. 
<br /><br />
In 2018, I graduated from university with M.Sc. (Tech) degree. I have worked in both consulting and product development. I have gathered a wide variety of knowledge and skills during my years at the university and work life. Right now I would like to focus on developing my skills in modern web software technologies - a subject which I studied as my minor but never really gave my full attention.
<br /><br />
I set my goals high, and am determined to reach them. I am not afraid to put in hours of hard work to achieve my goals in both professional and personal life. My dearest hobby is adventure cycling, which in my case contains everything from self-supported ultra-distance racing to leisure bikepacking trips. It requires long hours of structured training, systematic planning and ability to come up with improvised solutions to problems I never thought I would face. It has taught me the importance of making fast decisions under pressure and also knowing when to stop - even better than my year in a demanding consulting job.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
        </div>
      </div>
  );
}
