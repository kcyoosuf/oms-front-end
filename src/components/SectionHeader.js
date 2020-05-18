import React from 'react';
import { Toolbar, Grid, Divider } from '@material-ui/core';
const SectionHeader = ({ left, right }) => {
    return (
        <>
            <Toolbar>
                <Grid
                    justify="space-between"
                    container
                >
                    <Grid item>
                        {left}
                    </Grid>

                    <Grid item>
                        {right}
                    </Grid>
                </Grid>
            </Toolbar>
            <Divider />
        </>
    );
}

export default SectionHeader;