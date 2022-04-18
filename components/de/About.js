import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
  topic: {
    alignSelf: "center",
  },
  para: {
    alignSelf: "center",
  },
  img: {
    alignSelf: "center",
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
  },
  header: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  main: {
    marginBottom: theme.spacing(3),
    marginTop: -60,
  },
  palette: {
    tomato: "#FF6347",
    pink: {
      deep: "#FF1493",
      hot: "#FF69B4",
      medium: "#C71585",
      pale: "#DB7093",
      light: "#FFB6C1",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box alignItems="center" display="flex">
        <section>
          <Grid container justify="center" spacing={3} className={classes.main}>
            <Grid item xs={3} sm={3} md={2} className={classes.img}>
              <ImageLayout imageRef="/Tolga.svg" desc="team" />
              <Typography gutterBottom variant="body1" align="center">
                <Box fontWeight="fontWeightBold" display="inline">
                  Tolga Ermis
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={2} className={classes.img}>
              <ImageLayout imageRef="/Elias.svg" desc="team" />
              <Typography gutterBottom variant="body1" align="center">
                <Box fontWeight="fontWeightBold" display="inline">
                  Elias Kardel
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.topic}>
              <Typography variant="h6" display="inline" gutterBottom>
                Unsere Story.{" "}
              </Typography>
              <Typography
                style={{ color: "#FFD42A" }}
                variant="h5"
                display="inline"
              >
                Vom autonomen Fahren zu Security{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.para}>
              <Typography gutterBottom variant="body1">
                <Box fontWeight="fontWeightBold" display="inline">
                  Tolga{" "}
                </Box>
                and
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  Elias{" "}
                </Box>
                haben jahrelang im Bereich des automatisierten Fahrens
                gearbeitet. Während Elias erfolgreich Crowdsourcing basierte
                Projekte für das Training der KI erforschte, hat Tolga an der
                Entwicklung der kamerabsierten Spurhaltefunktionen von
                Volkswagen und Daimler mitgewirkt.
              </Typography>
              <Typography gutterBottom variant="body1">
                Eines Tages sahen sie jedoch eine Chance künstliche Intelligenz
                in Echtzeit mit automatisiertem menschlichem Eingreifen per
                Crowdworking zu augmentieren. Nach umfangreichen
                Marktforschungen entdeckten die beiden, dass Falschalarme im
                Sicherheitsbereich in der Tat ein weit verbreitetes Problem
                waren:
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  Mehr als 95 %{" "}
                </Box>
                aller Alarme von Sicherheitskameras werden aus irrelevanten
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  Gründen ausgelöst.{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                Die Idee, Sicherheit durch Crowdworking zu komplementieren, ist
                durchaus etwas verrückt. In einer Welt voll besetzter
                Leitstellen und ersten Anläufen der Automatisierung, mag die
                Idee des Crowdworking für Security völlig neu sein. Wir denken
                Alarmbearbeitung und Sicherheit neu. Henry Ford sagte “Wenn ich
                die Leute gefragt hätte was sie wollen, hätten sie schnellere
                Pferde gesagt”. Setzen Sie nicht auf schnellere Pferde, setzen
                Sie auf
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  promiseQ.{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                Die Leitstelle der Zukunft ist
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  dezentral und autonom!{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid container sm={12} justify="center">
              <Button
                id="about section redirect"
                text="Kontaktieren Sie uns"
                href="/contact"
              />
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default About;
