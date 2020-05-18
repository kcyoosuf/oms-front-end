import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../core/actions/auth-actions';
export default () => {
    const [loginData, setLoginData] = useState({})
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const doLogin = () => {
        dispatch(login(loginData))
    }
    return (
        <Grid container spacing={1}>
            {isLoggedIn === false ? (
                <>
                    <Grid item xs={12} md={3} lg={3}>
                        <TextField 
                            fullWidth 
                            variant="outlined" 
                            label="Username" 
                            margin="dense" 
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <TextField 
                            fullWidth variant="outlined" 
                            label="Mobile Number" 
                            margin="dense" 
                            onChange={(e) => setLoginData({ ...loginData, mobile: e.target.value })} />
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <Box mt={1.2}>
                            <Button
                                color="primary"
                                variant="contained"
                                margin="dense"
                                disableElevation
                                onClick={() => doLogin()}
                            >
                                {"Login"}
                            </Button>
                        </Box>
                    </Grid>
                </>) : (
                    <Typography>Logged in as {userData.displayName}</Typography>
                )}
        </Grid>
    )
}
