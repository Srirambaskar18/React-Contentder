import { FC, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "../Pages/Users/Users";
import AddUser from "../Pages/Forms/AddUser";
import DefaultUser, { User } from "../Components/DefaultUser";
import NotFound from "../NotFound";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Forms/Login";
import AppLayout from "../Layouts/AppLayout";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../Pages/Profile/ProfilePage";
export const AppRouter: FC = () => {
    const [users, setUsers] = useState<any>(DefaultUser);
    const [update, setUpdate] = useState<any>(null);

    //Addnew
    const addingUser = (data: User) => {
        setUsers((prevData: any) => [...prevData, data]);
        DefaultUser.push(data)
    }

    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/loginUser" element={<Login />} />
                <Route index element={<Navigate to="/loginUser" replace />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/user" element={<Users setUsers={setUsers} setUpdate={setUpdate} users={users} />} />
                        <Route path="/user/adduser" element={<AddUser users={users} update={update} setUpdate={setUpdate} addingUser={addingUser} />} />
                        <Route path="/user/update/:id" element={<AddUser users={users} update={update} setUpdate={setUpdate} addingUser={addingUser} />} />
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );

}

// useRoutes([
//     {path="/"},
//     {index:true ,element={<Navigate to={"/user"} />}},
//     {path="/user" element={<MainContent />}},
// {path="adduser" element={<AddUser />}}
// ])

