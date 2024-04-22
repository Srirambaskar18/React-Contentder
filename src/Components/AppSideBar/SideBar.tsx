import React from "react";
import "./SideBar.scss"
import { NavLink } from "react-router-dom";
export const SideBar = () => {
    return (
        <>
            <nav className="sideBar">
                <NavLink to="/user" className="user" style={({ isActive }) => ({
                    backgroundColor:isActive?"#5152F0":"white",
                    color: isActive
                        ? "white"
                        : "black",
                })}>User</NavLink>
                <div className="user">About</div>
                <div className="user">Features</div>
                <div className="user">Subscription</div>
                <div className="user">Support</div>
            </nav>
        </>
    );
}