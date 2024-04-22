import React from 'react'
import { Header } from "../Components/AppHeader/Header";
import { SideBar } from "../Components/AppSideBar/SideBar";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
    <Header />
      <div className="mainBox">
        <SideBar />
        <Outlet/>
      </div>
    </>
  )
}

 
