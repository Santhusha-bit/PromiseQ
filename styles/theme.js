import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
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
				body: {
					background:
						"linear-gradient(90deg, rgba(255,255,255,1) 45%, rgba(255,212,42,0.30) 100%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				},
			},
		},
	},
});

export default theme;
