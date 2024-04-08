import React, { FC } from "react";
import "./App.scss"
import { Header } from "./Layouts/AppHeader/Header";
import { MainContent } from "./Layouts/AppMainContent/MainContent";


export const App: FC = () => {

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
