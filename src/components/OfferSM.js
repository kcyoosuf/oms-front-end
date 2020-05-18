
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const useStyles = makeStyles(theme => ({

    offerItem: {
        display: "inline-block",
        padding: "20px 15px",
        cursor: "pointer",
        textDecoration: "none"
    },
    title1: {
        marginTop: 15,
        fontWeight: 800,
        overflow: "hidden",
    },
    title2: {
        color: "#388e3c",
        paddingTop: 8,
    },
    title3: {
        opacity: .6,
        paddingTop: 7,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    itemImage: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        margin: "auto",
        "max-width": "100%",
        "max-height": "100%",
        transition: 'transform .3s ease',
        "&:hover": {
            transform: "scale(1.1)"
        }
    }

}))
export default ({ items }) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        items.map((item, index) => {
            return (
                <Grid item align="center" key={index}>
                    <a className={classes.offerItem}>
                        <div style={{ "height": "150px" }}>
                            <div style={{ "height": "150px", "width": "150px", position: "relative" }}>
                                <img src={item.imageUrl} alt={item.title1} className={classes.itemImage} />
                            </div>
                        </div>
                        <Typography variant="subtitle1" className={classes.title1}>{item.title1}</Typography>
                        <Typography variant="subtitle2" className={classes.title2}>{item.title2}</Typography>
                        <Typography variant="body1" className={classes.title3}>{item.title3}</Typography>
                    </a>
                </Grid>
            )
        })


    )
}