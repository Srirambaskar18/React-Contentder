import PrimeButton from '../../Components/Button/AppButton';
import { InputFeild } from '../../Components/Input/AppInput';
import { AddNewUser } from '../../Pages/Forms/AddNewUser';
import { useState } from 'react';
import { Card } from '/src/Pages/Card';
import user1 from '../../assets/Images/user1.jpg';
import user2 from '../../assets/Images/user2.jpg';
import userone from '../../assets/Images/userone.jpg';

export const MainContent = () => {
    const [click, setClick] = useState(false);
    const [update, setUpdate] = useState(null);
    const userdata = [
        {
            imageurl: user1, profilename: "sri", designation: "Entertainer", ratings: 4, id: 1
        },
        {
            imageurl: userone, profilename: "ramachandran", designation: "Entertainer", ratings: 4, id: 2
        },
        {
            imageurl: user2, profilename: "dhanam", designation: "Entertainer", ratings: 1, id: 3
        },
        {
            imageurl: user1, profilename: "Bhuvanesh", designation: "cricketer", ratings: 5, id: 4
        }
    ]
    const [arr, setArr] = useState(userdata);
    const [search, setSearch] = useState([]);

    //Addnew
    const reference = (data) => {
        setArr((prevData) => [...prevData, data]);
        setClick(false);
    }
    const val = () => { setClick(false); }
    //remove
    const removeFunction = (i) => {
        const index = arr.filter((item) => item.id !== i);
        setArr(index);
    }

    //update
    const updateFunction = (i) => {
        const value = arr.filter((item) => item.id === i);
        setUpdate(value[0]);
        // value.map((data) => { name.imageurl.value = data.imageurl, name.profilename.value = data.profilename, name.designation.value = data.designation, name.ratings.value = data.ratings })
        console.log(value, 'update');
        // const editText="UPDATE YOUR CARD";
        setClick(true)
    };

    //search
    const [searchQuery, setSearchQuery] = useState('');
    let filteredResults = []
    const handleSearchChange = (value) => {
        setSearchQuery(value);
        filteredResults = arr.filter((item) => {
            if(value!=''){
                return item.profilename.toLowerCase().includes(value.toLowerCase())
            }
        });
        console.log(filteredResults,'mistake')
        setSearch(filteredResults)
    };

    return (
        <>
            {click ? <AddNewUser action={() => val()} reference={reference} referenceArr={arr} update={update} /> : " "}
            <section className="contentder__heading__search">
                <div className="contentder__headingbox">
                    <h1 className="contentder__heading">Contentder Experts</h1>
                </div>
                <div className="contentder__search__addnew">
                    <div className="contentder__icon__searchbar">
                        <div className="contentder__searchiconbox">
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="contentder__searchbar">
                            <InputFeild value={searchQuery} type="search" placeholder="Search here" className="contentder__search" handlechange={(e) => handleSearchChange(e.target.value)} />
                        </div>
                    </div>
                    <div className="contentder__addnew">
                        <PrimeButton className="contentder__addnew__button" buttontext='+ Add New' handleclick={() => setClick(true)} />
                    </div>
                </div>
            </section>
            <section className="contentder__cards__container">
                <div className="contentder__cards__box" >
                    {search && search.length > 0 ? search.map((value) => {
                        return (
                            <> 
                                {value && <Card usercard={value} removeFunction={removeFunction} updateFunction={updateFunction} />}
                            </>
                        );
                    })
                     :
                    arr?.map((value) => {
                        return (
                            <>
                                {value && <Card usercard={value} removeFunction={removeFunction} updateFunction={updateFunction} />}
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
// export const SearchNot=()=>{
//     return(
//         <div  className="search__not__found">Search Not Found</div>
//     );
// }