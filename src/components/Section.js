import React from 'react'
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles(theme => ({
    section: {
        overflowY: "hidden",
        overflowX: "auto",
        marginTop: 10
    }
}))
export default (props) => {
    const classes = useStyles();
    return (

        <Box
            bgcolor="background.paper"
            className={classes.section}
        >
            <SectionHeader
                left={
                    <Typography variant="h5" color="inherit">
                        {props.title || "Offers"}
                    </Typography>
                }
                right={
                    <Grid item>
                        <Button variant="contained" color="primary">
                            {props.buttonText || "view all"}
                        </Button>
                    </Grid>
                }
            />
            <Grid container>
                {props.children}
            </Grid>
        </Box >
    )
}