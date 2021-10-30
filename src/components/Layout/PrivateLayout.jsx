import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '../Shared/NavBar';

const PrivateLayout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
  );
}

export default PrivateLayout
