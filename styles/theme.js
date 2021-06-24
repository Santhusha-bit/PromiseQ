import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Breakpoints } from "@material-ui/system";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ffd42a",
		},
		secondary: {
			main: "#23c2b3",
		},
		error: {
			main: red.A400,
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
