import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, StepButton } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

export default function CheckoutStepper({ items }) {
    const classes = useStyles();
    const completedActions = useSelector(state => state.checkout.completedActions)
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    return (
        < div className={classes.root} >
            <Stepper activeStep={activeStep} nonLinear orientation="vertical">
                {items.map((item, index) => (
                    <Step key={item.action} style={{ padding: 0 }}>
                        <StepButton
                            onClick={completedActions.indexOf(item.action) > -1 ? handleStep(index) : undefined}
                            completed={completedActions.indexOf(item.action) > -1}
                        >
                            {item.text}
                        </StepButton>
                        <StepContent>
                            <Box p={2}>{item.component}</Box>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        {"Back"}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        onClick={handleNext}
                                        className={classes.button}
                                        disabled={!(completedActions.indexOf(item.action) > -1)}
                                    >
                                        {item.nextButtonText}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div >
    );
}