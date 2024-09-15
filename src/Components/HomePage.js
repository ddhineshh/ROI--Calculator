import React from 'react';
import { Typography,Card, CardContent, CardActions, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const cardText = `The ROI Calculator evaluates potential savings from new software and operational changes by analyzing costs like software, onboarding, and IT support. It calculates productivity gains, contractor savings, and provides 3-year ROI, payback period, and annual savings. This tool helps businesses make informed investment decisions.`;

  const navigate = useNavigate();

  return (
    <div>
      <Box p={5}>
        <Grid container spacing={2}>
          {[1].map((_, index) => (
            <Grid item size={{xs:12, sm:6, md:3}}  key={index}>
              <Card>
                <CardContent sx={{ wordWrap: 'break-word' }}>
                  <Typography gutterBottom variant="h5" fontFamily={'Inter'} fontWeight={'600'} component="div">
                    ROI Calculator
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: '20rem', fontFamily: 'Inter' }} color="text.secondary">
                    {cardText}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => navigate('/roi-calculator')} variant='contained' size="small" sx={{ fontFamily: 'Inter', textTransform: 'none' }}>
                    Go to ROI Calculator
                  </Button>
                  <Button variant='outlined' size="small" sx={{ fontFamily: 'Inter', textTransform: 'none' }}>
                    Rate
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
