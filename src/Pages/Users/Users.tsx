import { PrimaryBtn } from "../../Components/Button/AppButton";
import { InputField } from "../../Components/Input/AppInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { FC } from "react";
import { Card } from "../Card";
import { User } from "../../Common/UserInterface";
import "./Users.scss";
interface UsersProp{
    users: User[];
    setUsers:any;
    setUpdate: any;
}
export const Users: FC<UsersProp> = ({users,setUsers,setUpdate}) => {
    const [search, setSearch] = useState<Array<{}>>([]);

    const navigate = useNavigate()

    //remove
    const handleDelete = (id: number) => {
        const index = users.filter((item: any) => item.id !== id);
        setUsers(index);
    }

    //update
    const handleUpdate = (id: number) => {
        const value = users.filter((item: any) => item.id === id);
        setUpdate(value[0]);
    };

    //search
    const [searchQuery, setSearchQuery] = useState("");
    let filteredResults: Array<{}> = []
    const handleSearchChange = (value: any) => {
        setSearchQuery(value);
        filteredResults = users.filter((item: any) => {
            if (value) {
                return item.name.toLowerCase().includes(value.toLowerCase())
            }
        });
        console.log(filteredResults, "mistake")
        setSearch(filteredResults)
    };
    const handleAscending = () => {
        const sortedData = [...users.sort((a, b) => {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        })]
        setUsers(sortedData)
    }
    const handleDescending = () => {
        const sortedData = [...users.sort((a, b) => {
            return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
        })]
        setUsers(sortedData)
    }

    return (
        <>
            <div className="mainContent">
                <section className="headingSearchContainer">
                    <div className="headingBox">
                        <h1 className="heading">Contentder Experts</h1>
                    </div>
                    <div className="searchAddUser">
                        <div className="searchBar">
                            <div className="searchIcon">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="searchBox">
                                <InputField value={searchQuery} type="search" placeholder="Search here" className="search" handleChange={(event: any) => handleSearchChange(event.target.value)} />
                            </div>
                        </div>
                        <div className="addUserBtnBox">
                            <PrimaryBtn className="addUserBtn" btnTxt="+ Add New" handleClick={() => navigate("/user/adduser")} />
                        </div>
                        <div className="userSort">
                            <i className="fa fa-sort-alpha-asc iconidhu" onClick={handleAscending}></i>
                            <i className="fa fa-sort-alpha-desc" onClick={handleDescending}></i>
                        </div>
                    </div>
                </section>
                <section className="cardContainer">
                    {search && search.length > 0 ? search.map((value: any) => {
                        return (
                            <>
                                {value && <Card user={value} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                            </>
                        );
                    })
                        :
                        users?.map((value: any) => {
                            return (
                                <>
                                    {value && <Card user={value} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                                </>
                            );
                        })}
                </section>
            </div>
        </>
    );
}