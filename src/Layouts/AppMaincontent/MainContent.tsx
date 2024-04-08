import { PrimeButton } from "../../Components/Button/AppButton";
import { InputField } from "../../Components/Input/AppInput";
import { AddUser } from "../../Pages/Forms/AddUser";
import { useState } from "react";
import React, { FC } from "react";
import { Card } from "../../Pages/Card";
import { DefaultUser } from "../../Components/DefaultUser";
import "./MainContent.scss";

export const MainContent: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [update, setUpdate] = useState<any>(null);
    const [users, setUsers] = useState<any>(DefaultUser);
    const [search, setSearch] = useState<Array<{}>>([]);

    //Addnew
    const addingUser = (data:Object) => {
        setUsers((prevData) => [...prevData, data]);
        setIsOpen(false);
    }
    const AddUserClose = () => { setIsOpen(false); }

    //remove
    const handleDelete = (id:number) => {
        const index = users.filter((item:any) => item.id !== id);
        setUsers(index);
    }

    //update
    const handleUpdate = (id:number) => {
        const value = users.filter((item:any) => item.id === id);
        setUpdate(value[0]);
        setIsOpen(true)
    };

    //search
    const [searchQuery, setSearchQuery] = useState("");
    let filteredResults: Array<{}> = []
    const handleSearchChange = (value: any) => {
        setSearchQuery(value);
        filteredResults = users.filter((item:any) => {
            if (value) {
                return item.name.toLowerCase().includes(value.toLowerCase())
            }
        });
        console.log(filteredResults, "mistake")
        setSearch(filteredResults)
    };
    const handleAscending = () => {
        const sortedData = [...users.sort((a, b) => {
            console.log(a, b, "checkcheck")
            return a.name > b.name ? 1 : -1;
        })]
        setUsers(sortedData)
    }
    const handleDescending = () => {
        const sortedData = [...users].sort((a, b) => {
            console.log(a, b, "check")
            return a.name > b.name ? -1 : 1;
        })
        setUsers(sortedData)
    }

    return (
        <>
            {isOpen && <AddUser action={() => AddUserClose()} addingUser={addingUser} propUsers={users} setUpdate={setUpdate} update={update} />}
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
                            <InputField value={searchQuery} type="search" placeholder="Search here" className="search" handleChange={(event:any) => handleSearchChange(event.target.value)} />
                        </div>
                    </div>
                    <div className="addUserBtnBox">
                        <PrimeButton className="addUserBtn" btnTxt="+ Add New" handleClick={() => setIsOpen(true)} />
                    </div>
                    <div className="userSort">
                        <i className="fa fa-sort-alpha-asc" onClick={handleAscending}></i>
                        <i className="fa fa-sort-alpha-desc" onClick={handleDescending}></i>
                    </div>
                </div>
            </section>
            <section className="cardContainer">
                <div className="cardBox" >
                    {search && search.length > 0 ? search.map((value:any) => {
                        return (
                            <>
                                {value && <Card user={value} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                            </>
                        );
                    })
                        :
                        users?.map((value:any) => {
                            return (
                                <>
                                    {value && <Card user={value} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                                </>
                            );
                        })}
                </div>
            </section>
        </>
    );
}