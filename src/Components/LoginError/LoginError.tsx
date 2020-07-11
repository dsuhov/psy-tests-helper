import React, { FC } from 'react';
import { Box, Typography } from "@material-ui/core";

interface LoginErrorProps {
  errMsg: string;
}

export const LoginError: FC<LoginErrorProps> = ({ errMsg }) => {
  if (errMsg) {
    return (
      <Box display="flex" justifyContent="center" py={2}>
        <Typography color="error" variant="subtitle1" align="center">
          {errMsg}
        </Typography>
      </Box>
    );
  }

  return null;
}