import { Grid } from "@material-ui/core";
import ImageLayout from "components/ImageLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    WebkitFilter: "grayscale(100%)",
    justifyContent: "center",
    "&:hover": {
      WebkitFilter: "grayscale(0%)",
    },
  },
  fullBox: {
    margin: 10,
  },
}));

const companies = [
  {
    imagePath: "/berlin_senate_logo_new.png",
    description: "Berlin Senate Logo",
  },
  {
    imagePath: "/eu-sozialfonds.jpg",
    description: "EU Logo",
  },
  {
    imagePath: "/esf_logo.jpg",
    description: "ESF Logo",
  },
  {
    imagePath: "/invest-logo.jpg",
    description: "Invest Logo",
  },
  {
    imagePath: "/APX_logo.png",
    description: "APX Logo",
  },
  {
    imagePath: "/safety_&_security_things_logo.svg",
    description: "SAST Logo",
  },
  {
    imagePath: "/htw_logo.jpg",
    description: "HTW Logo",
  },
  {
    imagePath: "/data_guard.png",
    description: "Data guard Logo",
  },
  {
    imagePath: "/made.png",
    description: "Made Logo",
  },
];
const CompanyLogo = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.fullBox} container justify="center" spacing={5}>
        {companies.map((logo) => (
          <Grid
            item
            key={logo.description}
            xs={6}
            sm={3}
            md={3}
            className={classes.logo}
          >
            <ImageLayout
              imageRef={logo.imagePath}
              desc={logo.description}
              width="70%"
              objectFit="none"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompanyLogo;
