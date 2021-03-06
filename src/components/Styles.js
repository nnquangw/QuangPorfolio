import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "13%";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  aboutMe: {
    position:"relative",
    height:"50%",
    display: "inline-flex",
    animation: "$moveToCenter 2.5s forwards",
  },
  aboutMeCell: {
    margin:"10px",
    position:"relative",
    boxSizing: "border-box",
    borderStyle: "groove",
    borderColor: "#e3f2fd",
    borderRadius: 5,
    padding: "10px",
    width: "25%",
    animation: "$fadeIn 3s forwards",
    textAlign:"justify",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  avatar: {
    position: "relative",
    width: "25%",
    margin:"10px",
  },
  avatarText: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".5s ease",
    backgroundColor: "#e3f2fd",
    color: "#c2185b",
    "&:hover": {
      opacity: 1,
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "linear-gradient(45deg, #c2185b 30%, #1976d2 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 10px",
  },
  appBarButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  boxChecking: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#039be5",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxFound: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#1de9b6",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxIdx: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#5d4037",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxMin: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#7b1fa2",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxLeft: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#f57c00",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxRest: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#eeeeee",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxRight: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#0097a7",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxSwap: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#c2185b",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxSorted: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#afb42b",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxValue: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#9e9e9e",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  boxWrong: {
    margin: "5px",
    float: "left",
    width: "15px",
    height: "15px",
    background: "#212121",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  button: {
    background: "#fff",
    color: "#039be5",
    fontWeight: "bold",
    position: "relative",
    fontSize: "0.8rem",
  },
  buttonStart: {
    background: "#fff ",
    color: "#c2185b",
    fontWeight: "bold",
    position: "relative",
    fontSize: "0.8rem",
  },
  
  contact: {
    float: "right",
    flex: 1,
  },
  container: {
    background:
      "linear-gradient(-45deg, #e3f2fd, #fff, #c2185b, #1976d2, #fff, #e3f2fd)",
    backgroundSize: "400% 400%",
    animation: `$myWelcome 10s infinite`,
    // background: "linear-gradient(to top, #c2185b, #1976d2, #fff, #fff)",
    // backgroundSize: "250% 250%",
    // animation: `$myAbout 15s infinite`,
    letterSpacing: "1px",
    height: "calc(100vh - 64px)",
  },
  content: {
    flexGrow: 1,
    height: "90vh",
  },
  characterGrid: {
    fontSize: "3em",
    border: "1px solid rgba(0, 0, 0, .2)",
  },
  chart: {
    background: "linear-gradient(to top, #f5f5f5, #fff, #fff)",
    borderRadius: 10,
  },
  tooltipWidth: {
    maxWidth: 500,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    background: "linear-gradient(to right, #fff 95%, #fce4ec 100%)",
    height: "100vh",
  },
  formControl: {
    width:"10%",
    height: "10%",
    position: "relative",
    textAlign:"center",
  },
  formQuiz: {

  },
  info: {
    fontSize: "large",
    color: "#00b8d4",
  },
  imgStyle: {
    width: "100%",
    display: "block",
    height: "100%",
    boxShadow:
      "8px 4px 8px 5px rgba(0, 0, 0, 0.2), 10px 6px 20px 10px rgba(0, 0, 0, 0.19)",
    borderRadius: 5,
  },
  paper: {
    flex: 1,
    position: "relative",
    top:"1%",
    left: "1%",
    width: "98%",
    height: "98%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: 10,
    padding: "15px",
    opacity: 0.9,
  },
  paperCount: {
    position: "relative",
    float: "right",
    fontSize: "0.75rem",
    color: "#388e3c",
    borderStyle: "double",
    borderRadius: 3,
    borderColor: "#388e3c",
  },
  paperLegends: {
    display: "inline-flex",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 3,
    borderColor: "#9e9e9e",
    fontSize: "0.7rem",
    boxShadow: "0 0 0 0 ",
    alignItems: "center",
    padding: "2px",
  },
  paperResult: {
    position:"relative",
    float:"bottom",
    padding: "10px",
    marginTop: "10px",
    height: "20%",
    width: "100%",
    fontSize: "1rem",
    borderStyle: "double",
    borderRadius: 3,
    borderColor: "#388e3c",
  },
  pianoContainer: {
    position:"relative",
    top:"50%",
    width:"100%",
    height:"35%",
    maxHeight:"35%",
  },
  selectedItem: {
    background: "linear-gradient(to right, #fff 95%, #c2185b 100%)",
    borderRadius: 5,
    boxShadow: "0 3px 5px 3px rgba(102, 010, 251, 0.3)",
  },
  sidebarItemText: {
    color: "#1976d2",
    fontSize: "0.9rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginLeft: "10px",
  },
  sidebarSubitemText: {
    color: "#c2185b",
    fontSize: "0.9rem",
    fontStyle: "oblique",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  text: {
    fontSize: "1.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    webkitTransform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  visualizer: {
    padding: "10px 10px",
  },
  welcome: {
    background:
      "linear-gradient(-45deg, #e3f2fd, #fff, #c2185b, #1976d2, #fff, #e3f2fd)",
    backgroundSize: "400% 400%",
    fontSize: "2.8em",
    fontStyle: "oblique",
    // padding: "119.5px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px)",
    fontWeight: "bold",
    textAlign: "center",
    animation: `$myWelcome 10s infinite`,
    width: "100%",
  },
  welcomeList: {
    padding: "5% 0 0 0",
    listStyleType: "none",
    animation: `$changeColor 10s infinite`,
  },
  welcomeText: {
    padding: "20% 0 0 0",
    animation: `$fadeIn 5s, $changeColor2 10s infinite`,
  },
  "@keyframes myWelcome": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  "@keyframes changeColor": {
    "0%": {
      color: "#c2185b",
    },
    "50%": {
      color: "#1976d2",
    },
    "100%": {
      color: "#c2185b",
    },
  },
  "@keyframes changeColor2": {
    "0%": {
      color: "#1976d2",
    },
    "50%": {
      color: "#c2185b",
    },
    "100%": {
      color: "#1976d2",
    },
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "@keyframes moveToCenter": {
    "0%": {
      top:"0%",
    },
    "100%": {
      top: "25%",
    },
  },
}));
