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
import { useState, useEffect } from "react";
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
    paddingRight: 45,
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
  const [isLangEnglish, setIsLangEnglish] = useState(true);
  const prefix = isLangEnglish ? "/" : "/de/";

  useEffect(() => {
    localStorage.getItem("lang") &&
      setIsLangEnglish(localStorage.getItem("lang") === "eng");
  }, []);

  const languageSwitch = () => {
    if (isLangEnglish) {
      localStorage.setItem("lang", "de");
      router.push("/de").then(() => router.reload());
      setIsLangEnglish(false);
    } else {
      localStorage.setItem("lang", "eng");
      router.push("/").then(() => router.reload());
      setIsLangEnglish(true);
    }
  };

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
                  <Link href={`${prefix}roi`} passHref>
                    {/* ROI Calculator */}
                    <Button
                      id="roi navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {isLangEnglish ? "ROI Calculator" : "ROI Rechner"}
                    </Button>
                  </Link>
                  <Link href={`${prefix}booking`} passHref>
                    {/* Book a meeting */}
                    <Button
                      id="booking navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {isLangEnglish ? "Book a meeting" : "Termin buchen"}
                    </Button>
                  </Link>
                  <Link href={`${prefix}contact`} passHref>
                    {/* Contact us */}
                    <Button
                      id="contact navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {isLangEnglish ? "Contact us" : "Kontaktieren Sie uns"}
                    </Button>
                  </Link>
                  <Link href={`${prefix}careers`} passHref>
                    {/* Careers */}
                    <Button
                      id="career navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      {isLangEnglish ? "Careers" : "Jobs"}
                    </Button>
                  </Link>

                  <Button
                    id="lang navigation button"
                    className={classes.btn}
                    variant="contained"
                    onClick={languageSwitch}
                  >
                    {isLangEnglish ? "Deutsch" : "English"}
                  </Button>
                </Grid>
              )}
            </Toolbar>
          </Container>

          <Grid container className={classes.ribbon}>
            <Container>
              <Grid item xs={12}>
                <Grid container item xs={12} md={8}>
                  <Link href="/#home" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {isLangEnglish ? "Home" : "Home"}
                    </Typography>
                  </Link>
                  <Link href="/#about" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {isLangEnglish ? "About us" : "Über uns"}
                    </Typography>
                  </Link>
                  <Link href="/#affiliate" passHref>
                    <Typography
                      className={classes.textStyles}
                      variant="caption"
                    >
                      {isLangEnglish ? "Affiliate Program" : "Kostenloser Test"}
                    </Typography>
                  </Link>
                  <Link href="/#freeTrial" passHref>
                    <Typography
                      variant="caption"
                      className={classes.textStyles}
                    >
                      {isLangEnglish ? "Free Trail" : "Ihre Vorteile"}
                    </Typography>
                  </Link>
                  <Link href="/#privacy" passHref>
                    <Typography
                      variant="caption"
                      className={classes.textStyles}
                    >
                      {isLangEnglish
                        ? "Privacy & Security"
                        : "Datenschutz & Sicherheit"}
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
            <Link href="/de/roi" passHref>
              {/* ROI Calculator */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="ROI Calculator" />
              </ListItem>
            </Link>
            <Link href="/de/booking" passHref>
              {/* Book a meeting */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Book a meeting" />
              </ListItem>
            </Link>
            <Link href="/de/contact" passHref>
              {/* Contact us */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Contact us" />
              </ListItem>
            </Link>
            <Link href="/de/careers" passHref>
              {/* Careers */}
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Careers" />
              </ListItem>
            </Link>
            <Link href="/" onClick={languageSwitch}>
              <ListItem button component="a" className={classes.btn}>
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
