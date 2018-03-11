import React from 'react';

import classes from './ActivityLog.css'

const activityLog = (props) => {
    console.log("activity log");
    return(
        <div className={classes.ActivityLog}>
            <div className={classes.textnBorder}>
                {props.user}
                <div className={classes.smallText}>{props.action1}</div>
                {props.item2}
                <div className={classes.smallText}>with</div>
                {props.item1}
                <div className={classes.date}>{props.date}</div>
            </div>
        </div>
    )
}

export default activityLog;