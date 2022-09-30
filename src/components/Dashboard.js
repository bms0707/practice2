import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

function Dashboard(){
    return (
        <div className="main">
            <div className="sideheader">
                <Sidebar />
            </div>
            <div className="container2">
                <div className="date-profile"></div>
                <h2 className="mainName">Dashboard</h2>
                <div className="downs">
                    <div className="down"></div>
                    <div className="down"></div>
                    <div className="down"></div>
                </div>
                <div className="points">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="graph"></div>
                </div>
                <div className="graphs">
                    <div className="graph"></div>
                    <div className="graph"></div>
                </div>
                <div className="circleGraph"></div>
            </div>
        </div>
    )
}

export default Dashboard;