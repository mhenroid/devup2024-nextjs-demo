import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: "#498206",
    },
    secondary: {
      main: "#008ad8",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    // MuiAccordion: {
    //   styleOverrides: {
    //     root: {
    //       // border: "1px solid gray",
    //     },
    //   },
    // },
    // MuiAccordionSummary: {
    //   defaultProps: {
    //     expandIcon: <ExpandMoreIcon />,
    //   },
    //   styleOverrides: {
    //     root: {
    //       fontWeight: "bold",
    //     },
    //   },
    // },
  },
});

export default theme;
