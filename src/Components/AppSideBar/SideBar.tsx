import {useContext} from "react";
import "./SideBar.scss"
import { NavLink } from "react-router-dom";
import PrimaryBtn from "../Button/AppButton";
import { AuthContext } from "../../Routes/Auth";
const SideBar = () => {
    return (
        <>
            <nav className="sideBar">
                <NavLink to="/user" className="user" style={({ isActive }) => ({
                    backgroundColor: isActive ? "#5152F0" : "",
                    color: isActive
                        ? "white"
                        : "",
                })}>User</NavLink>
                <div className="user">About</div>
                <div className="user">Features</div>
                <div className="user">Subscription</div>
                <div className="user">Support</div>
            </nav>
        </>
    );
}
export default SideBar;