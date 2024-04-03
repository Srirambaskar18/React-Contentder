import  PrimeButton  from "../../Components/Button/AppButton";
import { InputFeild } from "../../Components/Input/AppInput";
import './LoginUser.scss'
export const LoginUser = ({actionclick}) => {
    return (
        <section className="login__bg">
        <form className="login__container" >
            <section className="login__header">
                <div className="login__headbox">
                    <p className="login__head">Login</p>
                </div>
                <div className="login__close">
                    <i className="fa fa-times-circle-o" onClick={actionclick}></i>
                </div>
            </section>
            <section className="login__username__pass">
                <div className="login__user__pass">
                    <form>
                        <label className="login__username" >User Name</label><br />
                        <InputFeild className="login__user__input" type="text" />
                        <br />
                        <label className="login__password" >Password</label><br />
                        <InputFeild className="login__pass__input" type="password" />
                    </form>
                </div>
            </section>
            <section className="login__userpass__buttonbox">
                <PrimeButton className="login__userpass__button" buttontext='LOGIN' />
            </section>
            <section className="login__userpass__signuppara">
                <div className="login__userpass__signup">New User? <a href=""> Sign up</a>
                </div>
            </section>
        </form>
        </section>
    );
}