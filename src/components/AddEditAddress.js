import React from 'react';
import { TextField, Grid, Button, Box, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { saveAddress } from '../core/actions/account-actions';
const AddEditAddress = () => {

    const dispatch = useDispatch();

    const onAddAddressClick = () => {
        dispatch(saveAddress({}))
    }
    return (
        <Box px={{ xs: 0, lg: 10 }}>
            <FormLabel component="legend">Add Address</FormLabel>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="Mobile Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="Locality"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="PinCode"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={12} lg={12} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="Address"
                        fullWidth
                        multiline
                        rows={3}
                        rowsMax={3}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="District"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        label="State"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <Box display="flex" pt={1} alignItems="space-between">
                        <p>{"Address Type "}&nbsp;</p>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                                value="start"
                                control={<Radio color="primary" />}
                                label="Home"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="start"
                                control={<Radio color="primary" />}
                                label="Work"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Button
                        variant="contained"
                        margin="dense"
                        color="primary"
                        disableElevation
                        onClick={() => onAddAddressClick()}
                    >
                        {"Add and Continue"}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AddEditAddress;