import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const pageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        margin: "0 20px",
        
        ...container
      },
      main: {
        background: "#FFFFFF",
        position: "absolute",
        top: "100px",
        left: "0",
        right: "0",
        margin: "0 30px 100px",
        "@media only screen and (max-width: 768px)": {
          margin: "0 10px 100px"
        },
        zIndex: "3"
      },
      mainRaised: {
      

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