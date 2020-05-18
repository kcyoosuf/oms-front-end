import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    title: {
        color: "#989898",
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 16
    },
    text: {
        color: "#333",
        textIndent: "1.5em",
        lineHeight: 2,
        wordBreak: 'break-all'
    }
}))
export default ({ title, text, items, children }) => {
    const classes = useStyles()
    return (
        <div style={{ border: "1px solid #eee", padding: 10, marginTop: 10 }}>
            <div className={classes.title}>{title}</div>
            <div className={classes.text}>
                <Typography>{text}</Typography>
            </div>
            {items && (
                <ul>
                    {items.map((item, index) => {
                        return <li key={index} style={{ wordBreak: 'break-all' }}>
                            <Typography>{item}</Typography></li>
                    })}
                </ul>
            )}
            {children}
        </div>
    )
}