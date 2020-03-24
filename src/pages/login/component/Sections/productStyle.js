import { title } from "../material-kit-react";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  carContainer: {
    // position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    // justifyContent: "center",
    alignItems: "middle",
    marginTop:"100px"
  },
  carCard: {
    height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#FF0000",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
  },
  imgCont: {
    maxWidth: "100%",
    maxHeight: "100%"

  }
};

export default productStyle;
