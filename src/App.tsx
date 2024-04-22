import React, { FC } from "react";
import "./App.scss"
import { AppRouter} from "./Routes/AppRouter";
import { useState } from "react";
import { DefaultUser } from "./Components/DefaultUser";


export const App: FC = () => {
  const [users, setUsers] = useState<any>(DefaultUser);
  const [update, setUpdate] = useState<any>(null);

  //Addnew
  const addingUser = (data: Object) => {
    setUsers((prevData) => [...prevData, data]);
}

  return (
    <>
      <AppRouter propUsers={users} propSetUsers={setUsers} propUpdate={update} propSetUpdate={setUpdate} propAddingUser={addingUser}/>
    </>
  );
}
