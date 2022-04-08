import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import LeftBanner from "./LeftBanner";
import bgimg from "./assets/bg-img.png";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundImage:`linear-gradient(
      ${theme.palette.primary.main}95 1%, 
      ${theme.palette.gradient.main} 90%), 
      url(${bgimg})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Hidden xsDown>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          item
          xs={12}
          md={5}
          className={classes.sidebar}
        >
          <LeftBanner />
        </Grid>
      </Hidden>
      <Grid container item 
      xs={12} 
      md={7}
      >
        {props.children}
      </Grid>
    </Grid>
  );
};

export default HomePage;