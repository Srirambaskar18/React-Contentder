import logo from '../../assets/Images/stickylogowhite1.png';
import PrimeButton from '../../Components/Button/AppButton';
import { useState } from 'react';
import { LoginUser } from '../../Pages/Forms/LoginUser';
import './Header.scss';

export const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <nav className='header__component'>
                <div className="header">
                    <section className="header__left">
                        <img src={logo} alt="contentderlogo" className="header__left__image" />
                        <h2 className="header__left__head">contentder</h2>
                    </section>
                    <section className="header__right">
                        <div className="header__right__route">
                            <div className="header__right__routebox">
                                <div className="header__right__route__links">
                                    <div className="header__right__route__link">Templates</div>
                                </div>
                                <div className="header__right__route__links">
                                    <div className="header__right__route__link">Features</div>
                                </div>
                                <div className="header__right__route__links">
                                    <div className="header__right__route__link">Subscription</div>
                                </div>
                                <div className="header__right__route__links">
                                    <div className="header__right__route__link">Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="header__right__button">
                            <PrimeButton className="header__right__login__button" buttontext='LOGIN' handleclick={() => setClick(true)} />
                        </div>
                    </section>
                </div>
            </nav>
            {click ? <LoginUser actionclick={() => setClick(false)} /> : " "}
        </>
    );
}