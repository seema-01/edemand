import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox, Container, FormControlLabel, Grid, TextField } from "@mui/material";
import Provider from "./Provider";
import AddressPayment from "./AddressPayment";
import { useTheme } from "@emotion/react";

const steps = ["Select The Address", "Confirm Your Payment"];

export default function PaymentPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //   const newSkipped = new Set(prevSkipped.values());
    //   newSkipped.add(activeStep);
    //   return newSkipped;
    // });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const theme = useTheme()

  return (
    <Box sx={{ mt: 3, bgcolor: theme.palette.background.paper , mb: 3, overflow: "hidden" }}>
      <Container>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
                {/* Ternary operator for page changes  */}
                {activeStep == 0 ? (
                  <Box sx={{ mt: 2, mb: 1 }}>
                    {/* Select Address Page import here  */}
                    <AddressPayment />
                  </Box>
                ) : (
                  // incompelte because of not ui present
                  <Box>
                    <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Payment method
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cardName"
                            label="Name on card"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cardNumber"
                            label="Card number"
                            fullWidth
                            autoComplete="cc-number"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="expDate"
                            label="Expiry date"
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="secondary"
                                name="saveCard"
                                value="yes"
                              />
                            }
                            label="Remember credit card details for next time"
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  </Box>
                )}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )} */}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </Box>
  );
}
