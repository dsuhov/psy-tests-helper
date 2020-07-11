import React, { FC } from 'react';
import { Container } from "@material-ui/core";

export const MainContainer: React.FC= ({ children }) => {
  return (
    <Container maxWidth="lg" style={{ paddingTop: 20 }}>
      {children as any}
    </Container>
  );
}