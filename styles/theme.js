import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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
					backgroundColor: "#FFFFFF",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				},
			},
		},
	},
});

export default theme;
