import { Grid, Container, Box } from "@material-ui/core";
import React from "react";

const impressum = () => {
  return (
    <Container maxWidth="lg">
      <Box marginTop={15}>
        <Grid container>
          <Grid item sm={12} md={12}>
            <h1>Umsatzsteuer-ID</h1>
          </Grid>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE342 439 632
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </Grid>
      </Box>
    </Container>
  );
};

export default impressum;
