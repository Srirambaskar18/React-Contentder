import{ FC, useContext, useState } from "react";
import logo from "../../assets/Images/stickylogowhite1.png";
import "./Header.scss";
import { AuthContext } from "../../Routes/Auth";
import Dropdown from "../Dropdown/Dropdown";
const Header: FC = () => {
    const {getProfileData}=useContext(AuthContext)
    const [isOpen,setIsOpen]=useState(false)
    const handleOpen=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="headerComponent">
                <div className="header">
                    <section className="left">
                        <img src={logo} alt="logo" className="logo" />
                        <h2 className="leftHeading">contentder</h2>
                    </section>
                    <section className="right">
                        <div className="profileNameImg">
                        <Dropdown open={isOpen}
                        setOpen={setIsOpen} 
                        trigger={<img src={getProfileData.image} alt="profileImg" onClick={handleOpen} className="profileImg"/>}
                        />
                        <p className="profileName">{getProfileData.name}</p>
                        </div>
                    </section>
                </div>
            </nav>
        </>
    );
}
export default Header;
