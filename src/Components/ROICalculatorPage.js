import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Grid from '@mui/material/Grid'

const ROICalculatorPage = () => {

  const [formValues, setFormValues] = useState({
    totalEmployees: 0,
    softwareAppsCurrent: 0,
    avgCostPerSoftwareLicense: 0,
    newSoftwareSolutionCost: 0,
    exEmployeesLastYear: 0,
    avgOnboardingCost: 0,
    contractorsEmployed: 0,
    contractorHourlyRate: 0,
    contractorWeeklyHours: 0,
    avgEmployeeHourlyWage: 0,
    manualTaskHoursPerWeek: 0,
    manualTaskReduction: 0,
    itSupportStaffHeadcount: 0,
    itTicketReduction: 0,
    currentAnnualServerCosts: 0,
    newAnnualServerCosts: 0,
    implementationCost: 0
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [results, setResults] = useState({});

  const handleInputChange = (e) => {
    setDialogOpen(false);
    setFormValues({
      ...formValues,
      [e.target.name]: parseFloat(e.target.value) || 0
    });
  };

  const handleCalculate = () => {
    const {
      totalEmployees, softwareAppsCurrent, avgCostPerSoftwareLicense, newSoftwareSolutionCost,
      exEmployeesLastYear, avgOnboardingCost, contractorsEmployed, contractorHourlyRate,
      contractorWeeklyHours, avgEmployeeHourlyWage, manualTaskHoursPerWeek, manualTaskReduction,
      itSupportStaffHeadcount, itTicketReduction, currentAnnualServerCosts, newAnnualServerCosts,
      implementationCost
    } = formValues;

    const currentSoftwareCosts = avgCostPerSoftwareLicense * newSoftwareSolutionCost;
    const softwareSavings = currentSoftwareCosts - newSoftwareSolutionCost;
    const currentOnboardingCosts = avgOnboardingCost * contractorsEmployed;
    const newOnboardingCosts = currentOnboardingCosts * (1 - manualTaskReduction / 100);
    const onboardingSavings = currentOnboardingCosts - newOnboardingCosts;
    const productivityGainAnnual = softwareAppsCurrent * manualTaskReduction * (itSupportStaffHeadcount / 100) * 52 * manualTaskHoursPerWeek;
    const currentContractorCosts = contractorHourlyRate * contractorWeeklyHours * avgEmployeeHourlyWage * 52;
    const newContractorCosts = currentContractorCosts * (1 - manualTaskReduction / 100);
    const contractorSavings = currentContractorCosts - newContractorCosts;
    const currentITSupportCosts = itTicketReduction * manualTaskHoursPerWeek * 2080;
    const newITSupportCosts = currentITSupportCosts * (1 - itTicketReduction / 100);
    const itSupportSavings = currentITSupportCosts - newITSupportCosts;
    const infrastructureSavings = newAnnualServerCosts - implementationCost;
    const totalAnnualSavings = softwareSavings + onboardingSavings + productivityGainAnnual + contractorSavings + itSupportSavings + infrastructureSavings;
    const totalCosts = implementationCost + newSoftwareSolutionCost;
    const threeYearROI = ((totalAnnualSavings * 3 - totalCosts) / totalCosts) * 100;
    const threeYearROIPercent = isNaN(threeYearROI) ? "0.00%" : `${threeYearROI / 100}`;
    const paybackPeriod = totalCosts / (totalAnnualSavings / 12);
    const annualSavings = totalAnnualSavings;
    const productivityHoursSaved = softwareAppsCurrent * manualTaskReduction * (itSupportStaffHeadcount / 100) * 52;

    const recommendation = threeYearROIPercent > 100
      ? "Strongly recommend proceeding"
      : threeYearROI > 50
        ? "Consider proceeding"
        : "Re-evaluate or consider alternatives";

    const result = {
      currentSoftwareCosts,
      softwareSavings,
      currentOnboardingCosts,
      newOnboardingCosts,
      onboardingSavings,
      productivityGainAnnual,
      currentContractorCosts,
      newContractorCosts,
      contractorSavings,
      currentITSupportCosts,
      newITSupportCosts,
      itSupportSavings,
      infrastructureSavings,
      totalAnnualSavings,
      totalCosts,
      threeYearROI,
      threeYearROIPercent,
      paybackPeriod,
      annualSavings,
      productivityHoursSaved,
      recommendation
    };

    console.log(result);

    setDialogOpen(true);
    setResults(result)
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };


  return (
    <Grid container xs={12} sm={12} md={12} spacing={2}>
      <Grid item xs={12} mt={5} ml={4}>
        <Typography variant="h5" fontFamily={'Inter'} fontWeight={600} gutterBottom>
          ROI Calculator
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} >
        <Grid container ml={4}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Total employees"
              name="totalEmployees"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Software apps (current)"
              name="softwareAppsCurrent"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Avg cost per software license"
              name="avgCostPerSoftwareLicense"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="New software solution cost"
              name="newSoftwareSolutionCost"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Ex-employees last year"
              name="exEmployeesLastYear"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Avg onboarding cost"
              name="avgOnboardingCost"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Contractors employed"
              name="contractorsEmployed"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Contractor hourly rate"
              name="contractorHourlyRate"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Contractor weekly hours"
              name="contractorWeeklyHours"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Grid container ml={4}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Avg employee hourly wage"
              name="avgEmployeeHourlyWage"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Manual task hours/week/emp"
              name="manualTaskHoursPerWeek"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Manual task reduction %"
              name="manualTaskReduction"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="IT support staff headcount"
              name="itSupportStaffHeadcount"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="IT ticket reduction %"
              name="itTicketReduction"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Current annual server costs"
              name="currentAnnualServerCosts"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="New annual server costs"
              name="newAnnualServerCosts"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              label="Implementation cost"
              name="implementationCost"
              variant="outlined"
              margin="normal"
              type="number"
              size='small'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={10} mt={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Button variant="contained" color="primary" sx={{
              fontFamily: 'Inter',
              background: 'linear-gradient(129deg, rgb(67, 50, 163) 0%, rgb(40, 108, 213) 100%)',

            }} onClick={handleCalculate}>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5.5} ml={4} mb={2}>
        {dialogOpen ? (
          <Box
            sx={{
              padding: '20px',
              borderRadius: '10px',
              background: 'linear-gradient(129deg, rgba(67, 50, 163, 0.1) 0%, rgba(40, 108, 213, 0.1) 100%)', // Light background gradient
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              fontFamily="Inter"
              fontWeight={600}
              gutterBottom
              align="center"
              sx={{
                background: 'linear-gradient(129deg, rgb(67, 50, 163) 0%, rgb(40, 108, 213) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ROI Results
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: 'CURRENT SOFTWARE COSTS', value: results.currentSoftwareCosts },
                { label: 'SOFTWARE SAVINGS', value: results.softwareSavings },
                { label: 'CURRENT ONBOARDING COSTS', value: results.currentOnboardingCosts },
                { label: 'NEW ONBOARDING COSTS', value: results.newOnboardingCosts },
                { label: 'ONBOARDING SAVINGS', value: results.onboardingSavings },
                { label: 'PRODUCTIVITY GAIN (ANNUAL)', value: results.productivityGainAnnual },
                { label: 'CURRENT CONTRACTOR COSTS', value: results.currentContractorCosts },
                { label: 'NEW CONTRACTOR COSTS', value: results.newContractorCosts },
                { label: 'CONTRACTOR SAVINGS', value: results.contractorSavings },
                { label: 'CURRENT IT SUPPORT COSTS', value: results.currentITSupportCosts },
                { label: 'NEW IT SUPPORT COSTS', value: results.newITSupportCosts },
                { label: 'IT SUPPORT SAVINGS', value: results.itSupportSavings },
                { label: 'INFRASTRUCTURE SAVINGS', value: results.infrastructureSavings },
                { label: 'TOTAL ANNUAL SAVINGS', value: results.totalAnnualSavings },
                { label: 'TOTAL COSTS', value: results.totalCosts },
                {label: '3-YEAR ROI',value: isNaN(results.threeYearROI) ? 0 : results.threeYearROI.toFixed(2)},
                {label: '3-YEAR ROI %',value: isNaN(results.threeYearROIPercent)? '0%' : results.threeYearROIPercent},
                {label: 'PAYBACK PERIOD (MONTHS)', value: isNaN(results.paybackPeriod) ? 0 : results.paybackPeriod.toFixed(2),},
                { label: 'ANNUAL SAVINGS', value: results.annualSavings },
                { label: 'PRODUCTIVITY HOURS SAVED', value: results.productivityHoursSaved },
                { label: 'RECOMMENDATION', value: results.recommendation },
              ].map(({ label, value }) => (
                <Grid item xs={12} key={label}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontFamily="Inter" fontWeight={600} color="textPrimary">
                      {label}:
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontWeight={600}
                      sx={{
                        background: 'linear-gradient(129deg, rgb(67, 50, 163) 0%, rgb(40, 108, 213) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box mt={4} textAlign="center">
              <Button
                onClick={handleCloseDialog}
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  background: 'linear-gradient(129deg, rgb(67, 50, 163) 0%, rgb(40, 108, 213) 100%)',

                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        ) : null}
      </Grid>


    </Grid>
  );
};

export default ROICalculatorPage;
