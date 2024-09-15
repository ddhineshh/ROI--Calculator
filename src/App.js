import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomePage from './Components/HomePage';
import ROICalculatorPage from './Components/ROICalculatorPage';

const App = () => {
  return (
    <>
    <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'white', minHeight: '2rem' }}>
          <img src='https://cdn.prod.website-files.com/648b3fb5ff20b9eb641b8ea2/64fbb4c435e8b272d44ae0db_Logo.svg' alt="Logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Inter', color: 'black', ml: '0.5rem', mt: '0.25rem', fontWeight: '600' }}>
            Web Store
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{
              backgroundColor: '#f1f1f1',
              borderRadius: '10px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
            }}
            slotProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/roi-calculator" element={<ROICalculatorPage />} />
    </Routes>
      </>
    
  );
};

export default App;
