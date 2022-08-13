import React, { useEffect, useState, useCallback } from 'react';
import { Box, Container, Grid } from '@mui/material';
// import MyModal from './components/MyModal/MyModal';
import MyForm from './components/MyForm/MyForm';
import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MyForm />
        <PostsList />
      </Box>
    </Container>
  );
}

export default App;
