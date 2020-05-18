import React from 'react';
import { Hidden, Box, Button, IconButton, Divider } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const CartItemButtons = () => {
    return (
        <>
            <Box
                mt={-3}
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="flex-end"
                display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: "flex" }}
            >

                <Button color="primary">Remove</Button>
                <Button color="primary">Move to Favorites</Button>

            </Box>
            <Box
                flexDirection="row"
                justifyContent="space-around"
                display={{ sm: "flex", xs: "flex", md: "flex", lg: "none", xl: "none" }}
                mt={1}
                border={0} borderLeft={0} borderRight={0} borderTop={1} borderColor="#eee"
            >
                <Button size="small" color="primary">Remove </Button>
                <Button size="small" color="primary">Move to Favorites</Button>
            </Box>
        </>
    );
}

export default CartItemButtons;