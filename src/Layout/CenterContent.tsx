import React, { FC } from "react";
import { Grid } from "@material-ui/core";

export const CenterContent: FC = ({ children }) => (
  <Grid container justify="center" alignItems="center" style={{ height: "100%" }}>
    {children}
  </Grid>
);