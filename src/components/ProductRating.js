import React from "react";
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles({
    rating: props => ({
        lineHeight: "normal",
        display: "inline",
        color: "#fff",
        padding: "2px 4px 2px 2px",
        borderRadius: 3,
        fontWeight: 500,
        fontSize: 12,
        verticalAlign: "middle",
        backgroundColor: props.backgroundColor
    }),
    totalrating: {
        display: "inline-block",
        paddingLeft: 8,
        fontWeight: 500,
        color: "#878787",
        padding: "2px 4px 2px 6px",
        verticalAlign: "middle",
    }

})
const getBackgroundByRating = (ratingValue) => {
    if (ratingValue <= 2)
        return "red";
    if (ratingValue < 3.5)
        return "orange";
    else return "#388e3c";
}
export default ({ ratingValue, totalRatings }) => {
    const props = { backgroundColor: getBackgroundByRating(ratingValue) };
    const classes = useStyles(props);
    return (
        <>
            <div className={classes.rating}>&#9733;{Math.round(ratingValue * 10) / 10}</div>
            {totalRatings && <div className={classes.totalrating}>{`(${totalRatings})`}</div>}
        </>
    )
}