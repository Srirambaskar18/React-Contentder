import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/Button/AppButton";
import InputField from "../../Components/Input/AppInput";
import "./Login.scss"
import React, { FC, useContext, useState } from "react";
import { AuthContext } from "../../Routes/Auth";
import DefaultUser from "../../Components/DefaultUser";

const Login: FC = () => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [loginData, setLoginData] = useState<any>({ userName: "", password: "" })
    const [error, setError] = useState({ userName: "", password: "" })
    const navigate = useNavigate()
    const { loginSuccess, handleGetProfiledata } = useContext(AuthContext)
    let loginUsersData: any;
    const getData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData((prev: object) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }
    const handleLoginClick = (event: any) => {
        loginUsersData = DefaultUser.find((data) => (data.name === loginData.userName && data.password === loginData.password))
        console.log(loginUsersData, "logindata")
        event.preventDefault()
        { loginData.userName === "" ? setError((prevState) => ({ ...prevState, userName: "UserName cannot be Empty" })) : setError((prevState) => ({ ...prevState, userName: "" })) }
        { (loginData.password.length < 6) ? setError((prevState) => ({ ...prevState, password: "Password must have 6 Characters" })) : setError((prevState) => ({ ...prevState, password: "" })) }
        { (loginData.password.length >= 6 && loginData.userName !== "" && loginData.password !== "") && navigate("/user", { replace: true }) }
        { (loginUsersData && loginData.password.length >= 6 && loginData.userName !== "" && loginData.password !== "") ? (loginSuccess(), handleGetProfiledata(loginUsersData)) : setError((prevState) => ({ ...prevState, password: "Username or password is wrong" })); }
    }
    return (
        <section className="loginBackground">
            <form className="loginContainer" >
                <section className="loginHeader">
                    <h2 className="heading">LOGIN</h2>
                </section>
                <section className="getInputBox">
                    <div className="userNameBox">
                        <label className="userName">User Name </label><br />
                        <InputField value={loginData.name} className="userInput" type="text" name="userName" handleChange={getData} maxLength={20} />
                        {error.userName && <p className="error">{error.userName}</p>}
                    </div>
                    <div className="passwordBox">
                        <label className="password">Password </label><br />
                        <InputField value={loginData.password} className="passwordInput" type={isShowPassword ? "text" : "password"} name="password" handleChange={getData} maxLength={20} />
                        {error.password && <p className="error">{error.password}</p>}
                        <div className="showForgetBox">
                            <InputField className="isShowPassword" type="checkbox" handleChange={() => setIsShowPassword((prev) => !prev)} />Show Password
                            <a className="forgetPassword" href="">Forget Password?</a>
                        </div>
                    </div>
                    <PrimaryBtn className="btn" btnTxt="LOGIN" handleClick={handleLoginClick} />
                    <div className="signupBox">New User? <a href=""> Sign up</a>
                    </div>
                </section>
            </form>
        </section>
    );
}

export default Login;