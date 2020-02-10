import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { Route, Switch } from "react-router-dom";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import FrontPage from "views/FrontPage.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const dashboardRoutes = [];


export default function App(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Katriina Heiskanen"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
    <Parallax image={require("assets/img/IMG_0466.jpg")} />
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/career" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Switch>
      <Footer />
    </div>
  );
}
