import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, Divider, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "#F6F6F6",
		flexGrow: 1,
		marginTop: theme.spacing(2),
	},
	listItem: {
		padding: theme.spacing(0.2),
		fontSize: "small",
		color: "inherit",
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
	iconButton: {
		marginRight: theme.spacing(1),
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.root}>
			<Container>
				<Grid container spacing={3} justify="center">
					<Grid item xs={6} sm={3}>
						<Grid item xs={12}>
							<Typography variant="body1" color="inherit">
								Managing Directors:
							</Typography>
						</Grid>
						<Divider />
						<Grid item xs={12}>
							<Typography variant="caption" color="inherit">
								Tolga Ermis <br /> Elias Kardel
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Grid item xs={12}>
							<Typography variant="body1" color="inherit">
								Location & Contact:
							</Typography>
						</Grid>
						<Divider />
						<Grid container>
							<Grid>
								<LocationOnIcon color="action" fontSize="small" />
							</Grid>
							<Grid>
								<Typography variant="caption" color="inherit">
									promiseQ GmbH, <br /> c/o The Drivery GmbH,
									<br /> Mariendorfer Damm 1,
									<br />
									12099 Berlin.
								</Typography>
							</Grid>
						</Grid>

						<Grid container>
							<Grid>
								<EmailIcon color="action" fontSize="small" />
							</Grid>
							<Grid>
								<Typography variant="caption" color="inherit">
									E-Mail: info@promiseq.com
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Grid container>
							<Grid item xs={12}>
								<Typography variant="body1" color="inherit">
									Site Map
								</Typography>
							</Grid>

							<Grid item xs={12}>
								<Divider />
								<List disablePadding>
									<Link href="/#home" passHref>
										<ListItem component="li" className={classes.listItem}>
											Home
										</ListItem>
									</Link>
									<Link href="/#solution" passHref>
										<ListItem component="li" className={classes.listItem}>
											Our Solution
										</ListItem>
									</Link>
									<Link href="/#benefits" passHref>
										<ListItem component="li" className={classes.listItem}>
											Benefits
										</ListItem>
									</Link>
									<Link href="/#applications" passHref>
										<ListItem component="li" className={classes.listItem}>
											Applications
										</ListItem>
									</Link>

									<Link href="/about" passHref>
										<ListItem component="li" className={classes.listItem}>
											About Us
										</ListItem>
									</Link>

									<Link href="/contact" passHref>
										<ListItem component="li" className={classes.listItem}>
											Contact Us
										</ListItem>
									</Link>
								</List>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Typography variant="body1" color="inherit">
							Connect with us:
						</Typography>
						<Divider />

						<IconButton
							className={classes.iconButton}
							aria-label="Linkedin"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/company/promiseq/",
									"_blank"
								)
							}
						>
							<LinkedInIcon color="action" />
						</IconButton>

						<IconButton
							className={classes.iconButton}
							aria-label="Linkedin"
							onClick={() => window.open("mailto:info@promiseq.com")}
						>
							<EmailIcon color="action" />
						</IconButton>

						<Divider />
						<Typography variant="caption" color="inherit">
							Privacy Policy
						</Typography>
						<br />
						<Typography variant="caption" color="inherit">
							Terms and Conditions
						</Typography>
						<br />
						<Typography variant="caption" color="inherit">
							© 2021 promiseQ Gmbh. All Rights Reserved.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
