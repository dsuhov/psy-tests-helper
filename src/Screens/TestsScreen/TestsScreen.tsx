import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import {
  Grid, Card, CardContent, CardActions, Typography, Button
} from "@material-ui/core";

export const TestsScreen: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">Шкала Депрессии Бека</Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="large" fullWidth component={RouterLink} to="/tests/shkalaDepressiiBeka">Пройти</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}