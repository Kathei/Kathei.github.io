/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/about-me" className={classes.navLink}>
        About Me
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/projects" className={classes.navLink}>
        Projects
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/career" className={classes.navLink}>
        Career
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/contact" className={classes.navLink}>
        Contact
      </Link>
      </ListItem>
    </List>
  );
}
