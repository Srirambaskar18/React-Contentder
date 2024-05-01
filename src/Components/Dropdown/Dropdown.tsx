import { FC, useContext } from "react";
import "./Dropdown.scss";
import PrimaryBtn from "../Button/AppButton";
import { AuthContext } from "../../Routes/Auth";
import { NavLink } from "react-router-dom";
interface DropdownProps {
    open: boolean;
    trigger: any;
    setOpen: (value: boolean) => void;
}
const Dropdown: FC<DropdownProps> = ({ open, trigger, setOpen }) => {
    const { logoutSuccess } = useContext(AuthContext)
    const handleProfile = () => {
        setOpen(false)
    }
    return (
        <div className="dropdown">
            {trigger}
            {open ? <ul className="menuItem">
                <li><NavLink to="/profile" className="profileLink" style={({ isActive }) => ({
                    backgroundColor: isActive ? "#5152F0" : "",
                    color: isActive
                        ? "white"
                        : "",
                })} onClick={handleProfile}>Profile</NavLink></li>
                <li><PrimaryBtn className="loginBtn" btnTxt="LogOut" handleClick={logoutSuccess} /></li>
            </ul> : null}

        </div>
    )
}

export default Dropdown
