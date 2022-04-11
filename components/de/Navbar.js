import Link from "next/link";
import { useRouter } from "next/router";
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
import { Typography, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#FFF",
    padding: "5px 0px 5px 0px",
  },
  drawer: {
    width: "250px",
    height: "100%",
  },

  imageBox: {
    display: "flex",
    marginLeft: -24,
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  imageBox2: {
    align: "left",
    display: "flex",
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  btnGroup: {
    paddingLeft: 180,
  },
  buttonStyles: {
    textTransform: "none",
    fontSize: "large",
    align: "right",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  btn: {
    textTransform: "none",
    fontSize: "large",
    align: "right",
    marginLeft: theme.spacing(3),
    backgroundColor: "#FFD42A",
    "&:hover": {
      backgroundColor: "#EBC327",
    },
  },
  ribbon: {
    backgroundColor: "#F6F6F6",
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  textStyles: {
    cursor: "pointer",
    fontSize: 13,
    textAlign: "left",
    margin: 0,
    marginRight: 46,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  lang: {
    cursor: "pointer",
    margin: "auto",
    fontSize: 13,
    "&:hover": {
      color: theme.palette.primary.main,
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
  let { t } = useTranslation("common");
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawer = () => {
    setOpen(true);
  };
  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar id="nav" className={classes.appBar}>
          <Container maxWidth="lg">
            <Toolbar>
              <Box className={classes.imageBox}>
                <Link href="/">
                  <img
                    src="/banner.png"
                    width="50%"
                    height="50%"
                    alt="Company Logo"
                  />
                </Link>
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
                  <Link href="/roi" passHref>
                    {/* ROI Calculator */}
                    <Button
                      id="roi navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {t("common:nav-item-1")}
                    </Button>
                  </Link>
                  <Link href="/booking" passHref>
                    {/* Book a meeting */}
                    <Button
                      id="booking navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {t("common:nav-item-2")}
                    </Button>
                  </Link>
                  <Link href="/contact" passHref>
                    {/* Contact us */}
                    <Button
                      id="contact navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {t("common:nav-item-3")}
                    </Button>
                  </Link>
                  <Link href="/careers" passHref>
                    {/* Careers */}
                    <Button
                      id="career navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {t("common:nav-item-4")}
                    </Button>
                  </Link>

                  <Link href="/" locale={router.locale === "en" ? "de" : "en"}>
                    <Button
                      id="lang navigation button"
                      className={classes.btn}
                      onClick={t("common:lang")}
                      component="a"
                      variant="contained"
                    >
                      {t("common:nav-item-5")}
                    </Button>
                  </Link>
                </Grid>
              )}
            </Toolbar>
          </Container>

          <Grid container spacing={3} className={classes.ribbon}>
            <Container>
              <Grid item xs={12}>
                <Grid container item xs={12} md={8}>
                  <Link href="/#home" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {t("common:ribbon-item-1")}
                    </Typography>
                  </Link>
                  <Link href="/#about" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {t("common:ribbon-item-2")}
                    </Typography>
                  </Link>
                  <Link href="/#affiliate" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {t("common:ribbon-item-3")}
                    </Typography>
                  </Link>
                  <Link href="/#freeTrial" passHref>
                    <Typography
                      variant="caption"
                      className={classes.textStyles}
                    >
                      {t("common:ribbon-item-4")}
                    </Typography>
                  </Link>
                  <Link href="/#privacy" passHref>
                    <Typography
                      variant="caption"
                      className={classes.textStyles}
                    >
                      {t("common:ribbon-item-5")}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </AppBar>
      </ElevationScroll>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawer}>
          <List component="nav" aria-label="navigation">
            <Link href="/roi" passHref>
              {/* ROI Calculator */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="ROI calculator" />
              </ListItem>
            </Link>
            <Link href="/booking" passHref>
              {/* Book a meeting */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Book a meeting" />
              </ListItem>
            </Link>
            <Link href="/contact" passHref>
              {/* Contact us */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Contact us" />
              </ListItem>
            </Link>
            <Link href="/careers" passHref>
              {/* Careers */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Careers" />
              </ListItem>
            </Link>
            <Link href="/" locale={router.locale === "en" ? "de" : "en"}>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Deutsch" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
