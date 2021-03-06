import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import bubble from "./assets/bubble.svg";

const LeftBanner = () => {
  return (
    <>
      <Grid>
        <img 
        src={bubble} 
        alt="bubble" 
        />
      </Grid>
      <Box p={11}>
        <Grid>
          <Typography 
          variant="h4" 
          align="center"
          >
            Conversation with anyone with any language 
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default LeftBanner;