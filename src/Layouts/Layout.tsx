import { FC } from "react"
import Header from "../Components/AppHeader/Header";
import SideBar from "../Components/AppSideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="mainBox">
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout; 
