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
import { Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#F6F6F6",
    padding: "5px 0px 5px 0px",
  },
  drawer: {
    width: "250px",
    height: "100%",
  },

  imageBox: {
    display: "flex",
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },

  buttonStyles: {
    textTransform: "none",
    fontSize: "large",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: theme.palette.primary.main,
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
                  <Link href="/#home" passHref>
                    <Button
                      id="home navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/#freeTrial" passHref>
                    <Button
                      id="free trial navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      Free Trial
                    </Button>
                  </Link>

                  <Link href="/#affiliate" passHref>
                    <Button
                      id="affiliate navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      Affiliate Program
                    </Button>
                  </Link>

                  <Link href="/#contact" passHref>
                    <Button
                      id="contact navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      Contact Us
                    </Button>
                  </Link>

                  <Link href="/careers" passHref>
                    <Button
                      id="career navigation button"
                      className={classes.buttonStyles}
                      disableRipple
                      component="a"
                    >
                      Careers
                    </Button>
                  </Link>

                </Grid>
              )}
            </Toolbar>
          </Container>
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

            <Link href="/#freeTrail" passHref>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Free Trial" />
              </ListItem>
            </Link>

            <Link href="/#affiliate" passHref>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Affiliate Program" />
              </ListItem>
            </Link>

            <Link href="/#applications" passHref>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="About Us" />
              </ListItem>
            </Link>

            <Link href="/#contact" passHref>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </Link>

            <Link href="/careers" passHref>
              <ListItem button component="a" className={classes.buttonStyles}>
                <ListItemText primary="Careers" />
              </ListItem>
            </Link>

          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
