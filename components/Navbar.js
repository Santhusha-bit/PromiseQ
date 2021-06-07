import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down("sm")]: { flexGrow: 1 },
	},
	appBar: {
		background: "#F6F6F6",
		padding: "5px 0px 5px 0px",
	},
	drawer: {
		width: "250px",
		height: "100%",
	},

	imageBox: { display: "flex", flexGrow: 1 },

	buttonStyles: {
		textTransform: "none",
		fontSize: "large",
		marginLeft: theme.spacing(3),
		"&:hover": {
			color: theme.palette.secondary.main,
			backgroundColor: "transparent",
		},
	},
}));

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const Navbar = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleDrawer = () => {
		setOpen(true);
	};
	return (
		<div className={classes.root}>
			<ElevationScroll {...props}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<Box className={classes.imageBox}>
							<img
								src="/banner.png"
								width="50%"
								height="50%"
								alt="Company Logo"
							/>
						</Box>
						{isMobile ? (
							<IconButton
								onClick={handleDrawer}
								color="inherit"
								edge="end"
								aria-label="menu"
							>
								<MenuIcon />
							</IconButton>
						) : (
							<Grid container justify="center">
								<Grid item>
									<Link href="/#home" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											Home
										</Button>
									</Link>

									<Link href="/#solution" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											Our Solution
										</Button>
									</Link>

									<Link href="/#benefits" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											Benefits
										</Button>
									</Link>

									<Link href="/#applications" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											Applications
										</Button>
									</Link>

									<Link href="/about" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											About Us
										</Button>
									</Link>

									<Link href="/contact" passHref>
										<Button
											className={classes.buttonStyles}
											disableRipple
											component="a"
										>
											Contact
										</Button>
									</Link>
								</Grid>
							</Grid>
						)}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<div className={classes.drawer}>
					<List component="nav" aria-label="navigation">
						<Link href="/#home" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="Home" />
							</ListItem>
						</Link>

						<Link href="/#solution" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="Our Solution" />
							</ListItem>
						</Link>

						<Link href="/#benefits" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="Benefits" />
							</ListItem>
						</Link>

						<Link href="/#applications" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="Applications" />
							</ListItem>
						</Link>

						<Link href="/about" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="About Us" />
							</ListItem>
						</Link>

						<Link href="/contact" passHref>
							<ListItem button component="a" className={classes.buttonStyles}>
								<ListItemText primary="Contact" />
							</ListItem>
						</Link>
					</List>
				</div>
			</Drawer>
		</div>
	);
};

export default Navbar;
