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
import { useRouter } from "next/router";

const Job = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);
  const router = useRouter();
  const jobId = +router.query.jobId;

  useEffect(() => getJobs(), []);

  useEffect(
    () => jobs.length && setCurrentJob(jobs.find((job) => job.jobId === jobId)),
    [jobId, router, jobs]
  );

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
      <Container maxWidth="lg">
        <Box marginTop={currentJob === null ? 15 : 5}>
          <Meta title="Careers" />
          {!isLoading && currentJob === null && (
            <Header title="Join Our Team" />
          )}
          <section id="current_jobs" style={{ minHeight: "70vh" }}>
            {!isLoading && currentJob === null && (
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

export default Job;
