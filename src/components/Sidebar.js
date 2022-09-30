import React from "react";
import {sidebarData} from "./SidebarData";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo"></div>
            {sidebarData.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    )
}

export default Sidebar;