import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import CheckIcon from "@material-ui/icons/Check";
import ImageLayout from "components/ImageLayout";

import Header from "./Header";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
  check: {
    color: "#FFD42A",
    marginLeft: 30,
  },
  check2: {
    color: "#FFD42A",
  },
  container: {
    paddingTop: 1,
    textAlign: "center",
  },
  topic: {
    paddingRight: 35,
    paddingLeft: 35,
  },
  points: { paddingRight: 35, paddingLeft: 35 },
}));

const Affiliate = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.container}>
        <Header title="Ihre Vorteile" />
        <Typography
          gutterBottom={10}
          variant="h4"
          component="h6"
          align="center"
          className={classes.textMiddle}
        ></Typography>

        <Box display={{ xs: "none", sm: "block" }}>
          <Grid container spacing={2}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/Integrator.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/monitoring_center.png"
                  width="35%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/corporate_security.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Sie revolutionieren Ihr Sicherheitsangebot, um Ihre Kunden
                  besser zu sch??tzen
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Sie erh??hen die Motivation und das Wohlbefinden ihrer
                  Operatoren. Proaktive Entscheidungen bei echten Alarmen
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Sie steigern Ihre Margen mit promiseQ als Teil Ihres
                  L??sungsportfolios
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Neueste Technologie und mehr Kundenzufriedenheit"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Automatisierte Optimierung, Updates, Health Checks Ihrer Kameras "
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Leistungsf??higere SLAs & Verbesserung der gesamten Schadensverh??tungsstandards"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Gesteigerte Motivation in der NSL und Reduktion von Aufmerksamkeitsfehlern"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="95% weniger Belastung Ihrer Operatoren mit Falschalarmen und mehr Zeit f??r die Bearbeitung echter Alarme"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Reduktion der Interventionszeit bei echten Alarmen"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Reduzieren Sie Ihre eigenen Kosten f??r das Falschalarm-Management"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Profitieren Sie von dem sich st??ndig verbessernden promiseQ Threat Detect"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Mehr Aufschaltungen ohne sprungfixe Kosten durch zus??tzliches Personal"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="about section redirect"
                text="ROI Rechner"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>

        <Box display={{ xs: "block", sm: "none" }}>
          <Grid container spacing={1}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/Integrator.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Sie erh??hen die Motivation und das Wohlbefinden ihrer
                  Operatoren. Proaktive Entscheidungen bei echten Alarmen
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Neueste Technologie und mehr Kundenzufriedenheit" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Automatisierte Optimierung, Updates, Health Checks Ihrer Kameras " />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Leistungsf??higere SLAs & Verbesserung der gesamten Schadensverh??tungsstandards" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src={"/monitoring_center.png"}
                  width="45%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>

              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Sie revolutionieren Ihr Sicherheitsangebot, um Ihre Kunden
                  besser zu sch??tzen
                </Typography>
              </Grid>

              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Gesteigerte Motivation in der NSL und Reduktion von Aufmerksamkeitsfehlern" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="95% weniger Belastung Ihrer Operatoren mit Falschalarmen und mehr Zeit f??r die Bearbeitung echter Alarme" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Reduktion der Interventionszeit bei echten Alarmen" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/corporate_security.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Sie steigern Ihre Margen mit promiseQ als Teil Ihres
                  L??sungsportfolios
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Reduzieren Sie Ihre eigenen Kosten f??r das Falschalarm-Management" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Profitieren Sie von dem sich st??ndig verbessernden promiseQ Threat Detect" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Mehr Aufschaltungen ohne sprungfixe Kosten durch zus??tzliches Personal" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="roi section redirect"
                text="ROI Calculator"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Affiliate;
