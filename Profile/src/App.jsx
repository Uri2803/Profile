// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import routes from './routes';
import userData from './data/data'

export default function App() {
  return (
    <Router>
      <Box>
        <Routes>
          {routes.map(route => (
            <Route 
              
              key={route.path}
              path={route.path}
              element={<route.component user={userData} />}
            />
          ))}
        </Routes>
      </Box>
    </Router>
  );
}
