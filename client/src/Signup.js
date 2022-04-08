import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
  Paper,
} from '@material-ui/core';
import HomePage from './HomePage';

const useStyles = makeStyles((theme) => ({
  navButton: {
    textAlign: "center",
    variant: "contained",
    background: "white",
    height: 50,
    width: 160,
    textDecoration: "none",
  },
  formButton: {
    height: 70,
    width: 150,
    fontSize: 20,
    fontWeight: 800,
    marginTop: "5%",
    marginLeft: "40%",
  },
  navBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 40,
    paddingRight: 40,
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20%",
  },
  formContainer: {
    height: 600,
    flexDirection: "row",
    justifyContent: "center",
  },
  suggestionLine: {
    paddingRight: 40,
  },
  formHeader: {
    fontWeight: 600,
    paddingBottom: 60,
  },
  formTextField: {
    width: "100%",
  },
  form: {
    width: "70%"
  },
}));

const Signup = ({ user, register }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <HomePage>
      <Grid item xs={12}>
        <Box className={classes.navBox}>
          <Typography
            className={classes.suggestionLine}
            color="secondary"
          >
            Already have an account?
          </Typography>
          <Paper elevation={3}>
            <Link href="/login" to="/login" className={classes.navButton}>
              <Button
                color="primary"
                className={classes.navButton}
              >
                Login
              </Button>
            </Link>
          </Paper>
        </Box>
      </Grid>
      <Grid
        item xs={12}
        className={classes.formContainer}
      >
        <Box className={classes.formBox}>
          <Typography
            className={classes.formHeader}
            variant="h4"
          >
            Create an account.
          </Typography>
          <form onSubmit={handleRegister} className={classes.form}>
            <Grid
              container direction="column"
              spacing={5}
            >
              <Grid item>
                <FormControl className={classes.formTextField}>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.formTextField}>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  className={classes.formTextField}
                >
                  <TextField
                    aria-label="Password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
              <FormControl 
              error={!!formErrorMessage.confirmPassword}
              className={classes.formTextField}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="Confirm Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
              <Button
                className={classes.formButton}
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Create
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </HomePage>
  );
};


export default Signup;
