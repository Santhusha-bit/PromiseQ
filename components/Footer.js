import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  IconButton,
  Checkbox,
  Box,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "components/Button";
import { TextField } from "@material-ui/core";
import { useTranslation } from "next-i18next";

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
    margin: "auto",
    color: "white",
    fontSize: 13,
  },
  topic: { marginTop: "0.3rem" },
  title: { marginBottom: "1rem", marginTop: "1rem" },
  locationIcon: { color: "#FFD42A", marginRight: 10 },
  socialIcon: { color: "#FFD42A" },
  bar: {
    backgroundColor: "#D2D2D2",
  },
  checkbox: {
    color: "#FFD42A",
    marginLeft: -11,
  },
  check: {
    marginTop: 10,
    paddingBottom: 0,
    marginBottom: -10,
  },
  checkText: {
    fontSize: 14,
  },
}));

const Footer = () => {
  let { t } = useTranslation();
  const classes = useStyles();
  const year = new Date();
  return (
    <>
      <footer className={classes.root}>
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xs={11} sm={4}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.title}
                >
                  {t("common:footer-sub-1-item-1")}
                  <Divider className={classes.topic} />
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" color="inherit">
                  Tolga Ermis <br /> Elias Kardel
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                color="inherit"
                className={classes.title}
              >
                {t("common:footer-sub-1-item-2")}
                <Divider className={classes.topic} />
              </Typography>

              <IconButton
                id="Linkedin Icon"
                aria-label="Linkedin"
                href="https://www.linkedin.com/company/promiseq/"
                target="_blank"
              >
                <LinkedInIcon color="action" className={classes.socialIcon} />
              </IconButton>

              <IconButton
                id="E-mail Icon"
                aria-label="E-mail"
                href="mailto:info@promiseq.com"
              >
                <EmailIcon color="action" className={classes.socialIcon} />
              </IconButton>

              <IconButton
                id="Youtube Icon"
                aria-label="Youtube"
                href="https://www.youtube.com/channel/UCmiUt8nhkkksPoyt60E_BfQ/featured"
                target="_blank"
              >
                <YouTubeIcon color="action" className={classes.socialIcon} />
              </IconButton>
            </Grid>

            <Grid item xs={11} sm={4}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.title}
                >
                  {t("common:footer-sub-2")}
                  <Divider className={classes.topic} />
                </Typography>
              </Grid>
              <Grid container className={classes.topic}>
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

              <Grid container className={classes.title}>
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
            <Grid item xs={11} sm={4}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.title}
                >
                  {t("common:footer-sub-3-item-1")}
                  <Divider className={classes.topic} />
                </Typography>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField id="email" label="Your e-mail" fullWidth="30" />
                  <Box className={classes.check}>
                    <Checkbox color="yellow" className={classes.checkbox} />
                    <Typography display="inline" className={classes.checkText}>
                      {t("common:footer-sub-3-item-2")}
                    </Typography>
                  </Box>
                  <Button
                    id="about section redirect"
                    text={t("common:footer-sub-3-item-3")}
                    href="/contact"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <footer className={classes.bar}>
        <Container>
          <Grid container spacing={3} justify="center" className={classes.bar}>
            <Grid item xs={12}>
              <Grid container item xs={12}>
                <Link href="/privacy" passHref>
                  <Typography
                    className={classes.textStyles}
                    variant="caption"
                    color="inherit"
                  >
                    Impressum
                  </Typography>
                </Link>
                <Link href="/privacy" passHref>
                  <Typography
                    className={classes.textStyles}
                    variant="caption"
                    color="inherit"
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Typography
                  className={classes.textStyles}
                  variant="caption"
                  color="inherit"
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  variant="caption"
                  color="inherit"
                  className={classes.textStyles}
                >
                  © {year.getFullYear()} promiseQ Gmbh. All Rights Reserved.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
