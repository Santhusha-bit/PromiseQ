import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

import Header from "./Header";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 85,
    marginTop: 35,
  },
  how: {
    paddingTop: 27,
  },
  how2: {
    paddingTop: 30,
  },
  main: {
    marginTop: 50,
    marginBottom: 30,
  },
  btnOutline: {
    paddingLeft: 35,
    paddingRight: 35,
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  buttons: {
    marginTop: 0,
  },
  content: {
    marginTop: 15,
  },
  img: {
    marginTop: 10,
    display: "block",
    margin: "0 auto",
    marginBottom: 30,
  },
}));

const FreeTrial = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Header title="Kostenloser Test" />
        <Grid container spacing={2}>
          <Grid container xs={12} sm={12} md={6} className={classes.trial}>
            <Typography
              gutterBottom={10}
              variant="h5"
              component="h6"
              className={classes.textMiddle}
            >
              Fortschrittlichste KI & Crowdworker <br /> Symbiose mit dem
              Versprechen, die
              <br /> Kosten für Ihre Notrufleistelle um mehr <br /> als die
              Hälfte zu reduzieren!
            </Typography>
            <Grid spacing={2} xs={12} sm={12} md={7}>
              <Typography gutterBottom variant="h6" component="h6">
                Genießen Sie 30 Tage Seelenfrieden in Ihrer Notrufleitstelle!
              </Typography>
              <Typography gutterBottom variant="body1" className={classes.main}>
                Sie setzen sich mit uns in Verbindung, und wir senden Ihnen eine
                einfache Schritt-für-Schritt-Anleitung zur Installation und
                Nutzung der Vorteile von und mit promiseQ.
              </Typography>
            </Grid>
            <Grid spacing={2} xs={12} sm={12} md={12}>
              <Grid container justify="center" className={classes.buttons}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="about section redirect"
                    text="Book a meeting"
                    href="/de/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="contact section redirect"
                    text="Free Trial"
                    href="/de/contact"
                    className={classes.btnOutline}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={12} sm={12} md={6} className={classes.how}>
            <Typography variant="h6" component="h6">
              Wie promiseQ funktioniert{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                - Fokus NSL{" "}
              </Typography>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              className={classes.content}
            >
              promiseQ Threat Detect nutzt ihre Vorzeigetechnologie zur
              Filterung von Falschalarmen, um die Anwesenheit von Menschen und
              Fahrzeugen in Videoalarmen zu erkennen. Mithilfe von Deep-Learning
              und Crowdworkern filtert die promiseQ Analytik mehr als 95 % der
              Falschalarme bei allen Kameratypen erfolgreich heraus. Zusätzliche
              Funktionen, wie Zeitplanung zur Scharfschaltung und Kamera Health
              Checks, geben Ihnen die Möglichkeit, die Effizienz der
              Videoüberwachung deutlich zu steigern.
            </Typography>
            <Typography variant="h6" component="h6" className={classes.how2}>
              Wie promiseQ funktioniert{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                - Fokus VMS & AMS{" "}
              </Typography>
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Sie nutzen die Vorteile von promiseQ Threat Detect über Ihre
              gewählte VMS- oder Alarmmanagementplattform. promiseQ lässt sich
              nahtlos in führende Systeme wie EBÜS, AMwin und Azena integrieren.
              Weitere sind in Planung: z.B. Milestone, Genetec und Immix.
            </Typography>
            <Typography gutterBottom variant="body1">
              Sie wollen mit uns kollaborieren und promiseQ auf Ihrer Plattform
              anbieten? Dann kontaktieren Sie uns!
            </Typography>
            <img
              src="/ebus.png"
              width="25%"
              height="auto"
              textAlign="center"
              object-fit="fill"
              className={classes.img}
            />
          </Grid>
        </Grid>{" "}
      </Container>
    </div>
  );
};

export default FreeTrial;
