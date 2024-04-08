import React, { FC } from "react";
import logo from "../../assets/Images/stickylogowhite1.png";
import { PrimeButton } from "../../Components/Button/AppButton";
import { useState } from "react";
import { LoginUser } from "../../Pages/Forms/LoginUser";
import "./Header.scss";

export const Header: FC = () => {
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
    return (
        <>
            <nav className="headerComponent">
                <div className="header">
                    <section className="left">
                        <img src={logo} alt="logo" className="logo" />
                        <h2 className="leftHeading">contentder</h2>
                    </section>
                    <section className="right">
                        <div className="route">
                            <div className="routeBox">
                                <div className="routeLink">
                                    <div className="routingLink">Templates</div>
                                </div>
                                <div className="routeLink">
                                    <div className="routingLink">Features</div>
                                </div>
                                <div className="routeLink">
                                    <div className="routingLink">Subscription</div>
                                </div>
                                <div className="routeLink">
                                    <div className="routingLink">Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="btnBox">
                            <PrimeButton className="loginBtn" btnTxt="LOGIN" handleClick={() => setIsLoginOpen(true)} />
                        </div>
                    </section>
                </div>
            </nav>
            {isLoginOpen && <LoginUser actionClick={() => setIsLoginOpen(false)} />}
        </>
    );
}