import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    marginTop: "-300px",
    marginBottom: "100px",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "-1px",
    fontWeight: "500",
    fontSize: "2.8rem",
    marginTop: 70,
  },
  subtitle: {
    fontSize: "1.353rem",
    maxWidth: "520px",
    textTransform: "uppercase",
    fontWeight: "600",
    marginTop: 0,
    paddingLeft: 2,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-520px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
};

export default landingPageStyle;
