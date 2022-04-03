import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderRadius: 7,
    "&:hover": {
      backgroundColor: "rgb(235 195 35)",
    },
  },
  label: {
    textTransform: "none",
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { text, color, variant, size, ...other } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "small"}
      color={color || "primary"}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
