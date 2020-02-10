import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const pageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        marginTop: "-300px",
        marginBottom: "100px",
        ...container
      },
      main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
      },
      mainRaised: {
        margin: "-520px 30px -70px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
      },

  section: {
    padding: "70px 0"
},

  ...imagesStyle,

  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default pageStyle;