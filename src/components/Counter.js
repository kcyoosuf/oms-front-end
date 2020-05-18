import React, { useState } from 'react';
import { IconButton, Box, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter = ({ quantity, maxValue }) => {
    const [qty, setQty] = useState(quantity)
    return (
        <>
            <Box display={{ xs: "none", md: "flex" }} alignItems="center" mt={1} mr={1}>
                <IconButton size="small">
                    <RemoveIcon />
                </IconButton>
                <TextField
                    type="number"
                    size="small"
                    variant="outlined"
                    margin="dense"
                    value={qty}
                    inputProps={{
                        min: 0, max: 10,
                        style: { textAlign: 'center', minWidth: 50, maxWidth: 70, height: 15, padding: 0, paddingTop: 8, paddingBottom: 8 }
                    }}
                    onChange={(e) => setQty(e.target.value)}
                />
                <IconButton size="small">
                    <AddIcon />
                </IconButton>
            </Box>
            <Box display={{ xs: "flex", md: "none" }} mt={1} mr={1} alignItems="center" border={1} borderColor="#eee">
                <Box color="#999" fontSize={12} >{"Quantity"}&nbsp;</Box>
                <select style={{ backgroundColor: "#fff", border: "none" }}>
                    {[...Array(10).keys()].map(i => {
                        return <option key={i + 1} value={i + 1}>{i + 1}</option>
                    })}
                </select>
            </Box>
        </>
    );
}

export default Counter; 