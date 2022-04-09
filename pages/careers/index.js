import Meta from "components/Meta";
import Header from "components/Header";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
  Container,
} from "@material-ui/core";
import JobList from "components/JobList";
import JobDescription from "components/JobDescription";
import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-translate/useTranslation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["careers", "common"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles((theme) => ({
  fullBox: {
    paddingTop: 70,
    paddingBottom: 70,
  },
}));

const careers = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);
  let { t } = useTranslation();

  useEffect(() => getJobs(), []);

  const getJobs = () => {
    setIsLoading(true);
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=LgqDR_OI3V98GG0C882TWdCK4a_OLtx0f9Wv4V00Bize0rxglqNiYeJCENnogiU2nosjHayQENWtwosVSGglYr4HwWQLFR6fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKzCKFCumaUSK7ljkjex80I63qfXxmG6v-8r-3tw718FeMPQwoFpDjv416YetwoTCQgQAPRwLIGrM7dQ8ZiDohSb2wiOXKc1KNz9Jw9Md8uu&lib=MDYMs6LQBT0TIp2Gl7L0Z8tTEvnd06pZ6"
      )
      .then((result) => {
        setIsLoading(false);
        setJobs(result.data);
      })
      .catch();
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.fullBox}>
        <Box marginTop={currentJob === null ? 15 : 5}>
          <Meta title="Careers" />
          {currentJob === null && (
            <Header title={t("careers:careers-header")} />
          )}
          <section id="current_jobs" style={{ minHeight: "60vh" }}>
            {currentJob === null && (
              <Grid>
                <Typography variant="h6" style={{ marginBottom: "30px" }}>
                  Current job vacancies :
                </Typography>
              </Grid>
            )}
            <Grid container justify="center" spacing={3}>
              {isLoading ? (
                <CircularProgress color="primary" />
              ) : currentJob !== null ? (
                <JobDescription
                  job={currentJob}
                  setCurrentJob={setCurrentJob}
                />
              ) : (
                jobs.map((job) => (
                  <JobList
                    key={job.jobId}
                    job={job}
                    setCurrentJob={setCurrentJob}
                  />
                ))
              )}
            </Grid>
          </section>
        </Box>
      </Container>
    </>
  );
};

export default careers;
