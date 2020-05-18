import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    page: props => ({
        margin: "0 auto",
        minWidth: props.minWidth,
        width: props.minWidth,
        maxWidth: "1680px",
        padding: 8,
        [theme.breakpoints.down('md')]: {
            padding: 4,
            minWidth: props.minWidth,
            width: "calc(100% - 8px)",
        },
    })
}))

const getWidth = margin => {
    if (margin === "large") return { minWidth: "75%" }
    else return { minWidth: "90%" }
}
export default ({ children, margin }) => {

    const classes = useStyles(getWidth(margin));
    return (
        <div className={classes.page}>
            {children}
        </div>
    )
}