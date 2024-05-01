import { FC, createContext, useState } from "react";
import { User } from "../Components/DefaultUser";

let AuthContextProps = {
    isAuthenticated: false,
    loginSuccess: () => { },
    logoutSuccess: () => { },
    getProfileData:{image: "",name: "",designation: "",ratings:"",id: "",password:""},
    handleGetProfiledata: (value:User) => { }
}
export const AuthContext = createContext(AuthContextProps);
interface AuthContextProviderProps {
    children: any;
}
export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [getProfileData, setGetProfileData] = useState<User>({image: "",name: "",designation: "",ratings:"",id: "",password:""});
    const loginSuccess = () => {
        setIsAuthenticated(true)
    }

    const logoutSuccess = () => {
        setIsAuthenticated(false)
    }
    const handleGetProfiledata = (value: User) => {
        setGetProfileData(value)
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, loginSuccess, logoutSuccess, getProfileData, handleGetProfiledata}}>
            {children}
        </AuthContext.Provider>
    );
}
