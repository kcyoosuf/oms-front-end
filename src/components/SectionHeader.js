import React from 'react';
import { Toolbar, Divider, Box } from '@material-ui/core';
const SectionHeader = ({ left, right }) => {
    return (
        <>
            <Toolbar>
                <Box
                    width={1}
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box>
                        {left}
                    </Box>

                    <Box>
                        {right}
                    </Box>
                </Box>
            </Toolbar>
            <Divider />
        </>
    );
}

export default SectionHeader;