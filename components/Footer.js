import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, Divider, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";

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
      color: theme.palette.primary.main,
    },
  },
  iconButton: {
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  textStyles: {
    cursor: "pointer",
  },
  title: { marginBottom: "1rem", marginTop: "0.5rem" },
  locationIcon: { marginRight: "0.5rem" },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date();
  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={8} sm={4}>
            <Grid item xs={12}>
              <Typography variant="body1" color="inherit">
                Managing Directors:
              </Typography>
            </Grid>
            <Divider className={classes.title} />
            <Grid item xs={12}>
              <Typography variant="caption" color="inherit">
                Tolga Ermis <br /> Elias Kardel
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={4}>
            <Grid item xs={12}>
              <Typography variant="body1" color="inherit">
                Location & Contact:
              </Typography>
            </Grid>
            <Divider className={classes.title} />
            <Grid container>
              <Grid>
                <LocationOnIcon
                  color="action"
                  fontSize="medium"
                  className={classes.locationIcon}
                />
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
                <EmailIcon
                  color="action"
                  fontSize="medium"
                  className={classes.locationIcon}
                />
              </Grid>
              <Grid>
                <Typography variant="caption" color="inherit">
                  E-Mail: info@promiseq.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={4}>
            <Typography variant="body1" color="inherit">
              Connect with us:
            </Typography>
            <Divider className={classes.title} />

            <IconButton
              id="Linkedin Icon"
              className={classes.iconButton}
              aria-label="Linkedin"
              href="https://www.linkedin.com/company/promiseq/"
              target="_blank"
            >
              <LinkedInIcon color="action" />
            </IconButton>

            <IconButton
              id="E-mail Icon"
              className={classes.iconButton}
              aria-label="E-mail"
              href="mailto:info@promiseq.com"
            >
              <EmailIcon color="action" />
            </IconButton>

            <IconButton
              id="Youtube Icon"
              className={classes.iconButton}
              aria-label="Youtube"
              href="https://www.youtube.com/channel/UCmiUt8nhkkksPoyt60E_BfQ/featured"
              target="_blank"
            >
              <YouTubeIcon color="action" />
            </IconButton>

            <Divider />
            <Link href="/privacy" passHref>
              <Typography
                className={classes.textStyles}
                variant="caption"
                color="inherit"
              >
                Privacy Policy
              </Typography>
            </Link>
            <br />
            <Typography
              className={classes.textStyles}
              variant="caption"
              color="inherit"
            >
              Terms and Conditions
            </Typography>
            <br />
            <Typography variant="caption" color="inherit">
              © {year.getFullYear()} promiseQ Gmbh. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
