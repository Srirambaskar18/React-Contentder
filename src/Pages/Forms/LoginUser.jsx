import PrimeButton from "../../Components/Button/AppButton";
import { InputField } from "../../Components/Input/AppInput";
import "./LoginUser.scss"
export const LoginUser = ({ actionClick }) => {
    return (
        <section className="background">
            <form className="loginContainer" >
                <section className="header">
                    <div className="headingBox">
                        <p className="heading">Login</p>
                    </div>
                    <div className="closeIcon">
                        <i className="fa fa-times-circle-o" onClick={actionClick}></i>
                    </div>
                </section>
                <section className="getInputBox">
                    <label>User Name :</label>
                    <InputField className="userName" type="text" />
                    <label>Password :</label>
                    <InputField className="password" type="password" />
                    <PrimeButton className="btn" btnTxt="LOGIN" />
                    <div>New User? <a href=""> Sign up</a>
                    </div>
                </section>
            </form>
        </section>
    );
}