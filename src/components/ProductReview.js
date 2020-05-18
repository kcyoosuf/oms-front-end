import React from "react"
import { makeStyles } from "@material-ui/core"
import ProductRating from "./ProductRating"
const useStyles = makeStyles((theme) => ({
    reviewContainer: {
        padding: 10,
        borderBottom:"1px solid #eee"
    },
    reviewTitle: {
        display: "flex",
        fontWeight: 800,
        marginLeft: 6
    },
    reviewContent: {
        paddingLeft: 5
    },
    customerName: {
        paddingLeft: 5,
        fontWeight:500,
        fontSize:12,
        color:"#888"
    },
    reviewAge :{
        paddingLeft: 5,
        fontSize:12,
        color:"#aaa"
    }
}))
export default ({ reviewItem }) => {
    const classes = useStyles()
    return (
        <div className={classes.reviewContainer}>
            <div className={classes.reviewTitle}>
                <ProductRating ratingValue={reviewItem.userRating} />
                <span className={classes.reviewTitle}>{reviewItem.reviewTitle}</span>
            </div>
            <div className={classes.reviewContent}>
                <p>{reviewItem.reviewContent}</p>
            </div>
            <span className={classes.customerName}>
                {reviewItem.customerName}
            </span>
            <span className={classes.reviewAge}>
                {reviewItem.reviewAge}
            </span>
        </div>
    )
}