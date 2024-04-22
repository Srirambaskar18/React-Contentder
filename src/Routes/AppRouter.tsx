import React, { FC } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { Users } from "../Pages/Users/Users";
import { AddUser } from "../Pages/Forms/AddUser";
import { NotFound } from "../NotFound";
import { User } from "../Common/UserInterface";
import { Layout } from "../Layouts/Layout";
import { Login } from "../Pages/Forms/Login";
interface AppRouterProp {
    propUsers: User[];
    propSetUsers: any;
    propUpdate: User;
    propSetUpdate: any;
    propAddingUser: ({ }) => void;
}
export const AppRouter: FC<AppRouterProp> = ({ propUsers, propSetUsers, propUpdate, propSetUpdate, propAddingUser }) => {
    return (
        <Routes>
            <Route path="/loginUser" element={<Login />} />
            <Route index element={<Navigate to="/loginUser" />} />
            <Route path="/" element={<Layout />}>
                <Route path="/user" element={<Users setUsers={propSetUsers} setUpdate={propSetUpdate} users={propUsers} />} />
                <Route path="/user/adduser" element={<AddUser users={propUsers} update={propUpdate} setUpdate={propSetUpdate} addingUser={propAddingUser} />} />
                <Route path="/user/update/:id" element={<AddUser users={propUsers} update={propUpdate} setUpdate={propSetUpdate} addingUser={propAddingUser} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );

}

// useRoutes([
//     {path="/"},
//     {index:true ,element={<Navigate to={"/user"} />}},
//     {path="/user" element={<MainContent />}},
// {path="adduser" element={<AddUser />}}
// ])

