import { Grid, Container, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  lastText: {
    marginBottom: 24,
  },
}));

const Impressum = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box marginTop={20} marginBottom={5}>
        <Grid container>
          <Grid item sm={12} md={12}>
            <h1>Umsatzsteuer-ID</h1>
          </Grid>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE342 439
          </p>
          <Grid item sm={12} md={12}>
            <h2>
              Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
            </h2>
          </Grid>
          <p className={classes.lastText}>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </Grid>
      </Box>
    </Container>
  );
};

export default Impressum;
