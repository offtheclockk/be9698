import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
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
    marginTop: '9%',
    marginLeft: '40%'
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
    marginLeft: '20%',
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
    width: "90%",
  },
  form: {
    width: "70%",
  },
}));

const Login = ({ user, login }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
            Don't have an account?
          </Typography>
          <Paper elevation={3}>
            <Link href="/register" to="/register">
              <Button
                className={classes.navButton}
                color="primary"
              >
                Create Account
              </Button>
            </Link>
          </Paper>
        </Box>
      </Grid>
      <Grid
        className={classes.formContainer}
        item xs={12}
      >
        <Box
          ps={8}
          className={classes.formBox}
        >
          <Typography
            className={classes.formHeader}
            variant="h4"
          >
            Welcome Back!
          </Typography>
          <form
            onSubmit={handleLogin}
            className={classes.form}
          >
            <Grid
              container direction="column"
              spacing={5}
            >
              <Grid item>
                <FormControl
                  margin="normal"
                  required
                  className={classes.formTextField}
                >
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  margin="normal"
                  required
                  className={classes.formTextField}>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.formButton}>
                Login
              </Button>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </HomePage>
  );
};

export default Login;
