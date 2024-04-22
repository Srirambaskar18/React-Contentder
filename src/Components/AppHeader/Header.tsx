import React, { FC } from "react";
import logo from "../../assets/Images/stickylogowhite1.png";
import { PrimaryBtn } from "../../Components/Button/AppButton";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
    const navigate=useNavigate()
    return (
        <>
            <nav className="headerComponent">
                <div className="header">
                    <section className="left">
                        <img src={logo} alt="logo" className="logo" />
                        <h2 className="leftHeading">contentder</h2>
                    </section>
                        <section className="right">
                            <PrimaryBtn className="loginBtn" btnTxt="LogOut" handleClick={() =>navigate("/loginUser")} />
                    </section>
                </div>
            </nav>
        </>
    );
}