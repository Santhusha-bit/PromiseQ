import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

import Header from "./Header";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 50,
    marginTop: 20,
  },
  img_1: {
    display: "block",
    margin: "0 auto",
    marginBottom: 40,
  },
  img_2: {
    display: "block",
    margin: "0 auto",
    marginTop: 20,
  },
  img_3: {
    display: "block",
    margin: "0 auto",
    marginBottom: 20,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
  container: {
    textAlign: "center",
  },
}));

const Privacy = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.container}>
        <Header title="Datenschutz & Sicherheit" align="center" />
        <Typography
          variant="h5"
          component="h6"
          align="center"
          className={classes.textMiddle}
        >
          Wir konzipieren unsere Produkte & Prozesse nach höchsten Datenschutz - und Marktstandards!
        </Typography>

        <Box display={{ xs: "none", sm: "block" }}>
          <Grid container spacing={2}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/data_protection.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_1}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/data_transfer.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_2}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/insurance_protection.png"
                  width="45%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_3}
                />
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Höchster Datenschutz
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Datentransfer VDS-Konform
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Höchster Versicherungschutz
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Nach intensiven DSGVO Audits mit unserem Partner und DSB DataGuard, arbeiten wir streng nach dem privacy by design Konzept. Ihre Daten sind sicher!"
                    />
                  </ListItem>
                  <Link href="https://www.dataguard.de/">
                    <img
                      src="/data_guard.png"
                      width="17%"
                      height="auto"
                      textAlign="center"
                      object-fit="fill"
                      className={classes.img}
                    />
                  </Link>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Wir liefern Ihnen alle notwendigen Zeitstempel und Signalinformationen als Metadaten mit, damit Sie Ihre Zertifizierungsanforderungen mit Leichtigkeit erfüllen."
                    />
                  </ListItem>
                  <img
                    src="/VdS.png"
                    width="17%"
                    height="auto"
                    textAlign="center"
                    object-fit="fill"
                    className={classes.img}
                  />
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Einmalig im Bereich Videoanalyse: Das exklusive promiseQ Threat Detect Gesamtpaket gewährt Ihnen 100%igen Versicherungsschutz, deutlich über dem empfohlenen BDSW Mindeststandard liegt."
                    />
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.bdj.de/atlas/">
                      <img
                        src="/atlas.png"
                        width="40%"
                        height="auto"
                        object-fit="fill"
                        textAlign="center"
                        className={classes.img}
                      />
                    </Link>
                    <img
                      src="/mit.png"
                      width="20%"
                      height="auto"
                      object-fit="fill"
                      textAlign="center"
                      className={classes.img}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="about section redirect"
                text="ROI calculator"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Box display={{ xs: "block", sm: "none" }}>
        <Grid container spacing={1}>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Höchster Datenschutz
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="Nach intensiven DSGVO Audits mit unserem Partner und DSB DataGuard, arbeiten wir streng nach dem privacy by design Konzept. Ihre Daten sind sicher!"
                  />
                </ListItem>
                <img
                  src="/data_guard.png"
                  width="17%"
                  height="auto"
                  object-fit="fill"
                  textAlign="center"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Datentransfer VDS-Konform
              </Typography>
            </Grid>

            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="Wir liefern Ihnen alle notwendigen Zeitstempel und Signalinformationen als Metadaten mit, damit Sie Ihre Zertifizierungsanforderungen mit Leichtigkeit erfüllen."
                  />
                </ListItem>
                <img
                  src="/VdS.png"
                  width="17%"
                  height="auto"
                  textAlign="center"
                  object-fit="fill"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <img
                src="/corporate_security.png"
                width="50%"
                textAlign="center"
                height="auto"
                object-fit="fill"
                className={classes.img}
              />
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Höchster Versicherungschutz
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="Einmalig im Bereich Videoanalyse: Das exklusive promiseQ Threat Detect Gesamtpaket gewährt Ihnen 100%igen Versicherungsschutz, deutlich über dem empfohlenen BDSW Mindeststandard liegt."
                  />
                </ListItem>
                <img
                  src="/atlas.png"
                  width="17%"
                  height="auto"
                  textAlign="center"
                  object-fit="fill"
                  className={classes.img}
                />
                <img
                  src="/mit.png"
                  width="17%"
                  textAlign="center"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Privacy;
