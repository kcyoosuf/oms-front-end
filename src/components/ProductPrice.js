import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { getCurrency } from "../helpers/util/string-util";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({

    price: {
        "fontWeight": "500",
        "color": "#212121"
    },
    actual_price: {
        "marginLeft": "8px",
        "textDecoration": "line-through",
        "color": "#878787"
    },
    discount: {
        "color": "#388e3c",
        "letterSpacing": "-0.2px",
        "fontWeight": "500",
        "display": "inline-block",
        "marginLeft": "8px"
    }

})

export default ({ price, actualPrice, offerPercentage }) => {
    const classes = useStyles();
    return (
        <>
            <Box pt={1} display="flex" alignItems="flex-end" flexWrap="wrap">
                <Box
                    fontSize={{ xs: 16, sm: 16, md: 18, lg: 22 }}
                    fontWeight={500}
                    className={classes.price}
                >
                    {getCurrency()}{price}
                </Box>
                <Box
                    fontSize={{ xs: 14, sm: 14, md: 16, lg: 18 }}
                    fontWeight={500}
                    className={classes.actual_price}
                >
                    {getCurrency()}{actualPrice}
                </Box>
                <Box
                    fontSize={{ xs: 13, sm: 13, md: 13, lg: 17 }}
                    fontWeight={500}
                    className={classes.discount}
                >
                    {`${offerPercentage}% off`}
                </Box>
            </Box>
        </>
    )
}