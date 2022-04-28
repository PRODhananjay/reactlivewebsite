import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './newDesign.css';
export default function Watch(){
    return(
        <>
        <div className="watch-container">
            <div className="watchContained">
                <div className="date watch-details">
                <h3>9 June</h3>
                <h2>2022</h2>
                </div>
                <div className="watch-icon">
                    <AccessTimeIcon className="clock_icon"/>
                </div>
                <div className="time watch-details">
                <h3>Events Time</h3>
                <h2>10:30 </h2>
                </div>
                
            </div>
        </div>
        </>
    )
}