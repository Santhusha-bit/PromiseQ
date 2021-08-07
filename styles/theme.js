import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Breakpoints } from "@material-ui/system";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffd42a",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `"Poppins"`,
    h4: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          scrollPaddingTop: "100px",
        },
        body: {
          backgroundColor: "#FFFFFF",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export default theme;
