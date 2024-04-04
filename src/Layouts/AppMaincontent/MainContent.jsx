import PrimeButton from '../../Components/Button/AppButton';
import { InputField } from '../../Components/Input/AppInput';
import { AddUser } from '../../Pages/Forms/AddUser';
import { useState } from 'react';
import { Card } from '/src/Pages/Card';
import { DefaultUser } from '../../Components/Button/DefaultUser';
import '../AppMainContent/MainContent.scss';

export const MainContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [update, setUpdate] = useState(null);
    const [users, setUsers] = useState(DefaultUser);
    const [search, setSearch] = useState([]);

    //Addnew
    const addingUser = (data) => {
        setUsers((prevData) => [...prevData, data]);
        setIsOpen(false);
    }
    const AddUserClose = () => { setIsOpen(false); }

    //remove
    const handleDelete = (id) => {
        const index = users.filter((item) => item.id !== id);
        setUsers(index);
    }

    //update
    const handleUpdate = (id) => {
        const value = users.filter((item) => item.id === id);
        setUpdate(value[0]);
        setIsOpen(true)
    };

    //search
    const [searchQuery, setSearchQuery] = useState('');
    let filteredResults = []
    const handleSearchChange = (value) => {
        setSearchQuery(value);
        filteredResults = users.filter((item) => {
            if(value){
                return item.name.toLowerCase().includes(value.toLowerCase())
            }
        });
        console.log(filteredResults,'mistake')
        setSearch(filteredResults)
    };
    const handleAscending=()=>{
        const sortedData=[...users.sort((a,b)=>{
            console.log(a,b,'checkcheck')
            return a.name > b.name ? 1 : -1;
        })]
        setUsers(sortedData)
    }
    const handleDescending=()=>{
        const sortedData=[...users].sort((a,b)=>{
            console.log(a,b,'check')
            return a.name > b.name ? -1 : 1;
        })
        setUsers(sortedData)
    }

    return (
        <>
            {isOpen ? <AddUser action={() => AddUserClose()} addingUser={addingUser} propUsers={users} setUpdate={setUpdate} update={update} /> : " "}
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
                            <InputField value={searchQuery} type="search" placeholder="Search here" className="search" handleChange={(e) => handleSearchChange(e.target.value)} />
                        </div>
                    </div>
                    <div className="addUserBtnBox">
                        <PrimeButton className="addUserBtn" btnTxt='+ Add New' handleClick={() => setIsOpen(true)} />
                    </div>
                    <div className="userSort">
                    <i className="fa fa-sort-alpha-asc" onClick={handleAscending}></i>
                    <i className="fa fa-sort-alpha-desc" onClick={handleDescending}></i>
                    </div>
                </div>
            </section>
            <section className="cardContainer">
                <div className="cardBox" >
                    {search && search.length > 0 ? search.map((value) => {
                        return (
                            <> 
                                {value && <Card user={value} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
                            </>
                        );
                    })
                     :
                    users?.map((value) => {
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