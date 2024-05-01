import InputField from "../../Components/Input/AppInput";
import PrimaryBtn from "../../Components/Button/AppButton";
import React, { FC, useState } from "react";
import "./AddUser.scss";
import { User } from "../../Components/DefaultUser";
import { useNavigate } from "react-router-dom";

interface AddUserProps {
    addingUser: (value:User ) => void;

    users: User[];

    update: User;

    setUpdate: (value: any) => void;
}
const AddUser: FC<AddUserProps> = ({ addingUser, users, update, setUpdate }) => {
    const navigate = useNavigate()
    let btnTxt: string;
    let addUserTitle: string;

    if (update !== null) {
        btnTxt = "UPDATE"
        addUserTitle = "Update your card"
    }
    else {
        btnTxt = "CREATE"
        addUserTitle = "Create User"
    }
    const initialForm: User = {
        image: "",
        name: "",
        designation: "",
        ratings: "",
        id: "",
        password:"password"
    }

    const [data, setData] = useState(update ? update : initialForm);
    const [error, setError] = useState({ url: "", name: "", designation: "", rating: "" })

    //form submit function
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(data)
        event.preventDefault();
        if (data.image === "") {
            setError((prevState) => ({ ...prevState, url: "Image is required" }))
        }
        if (data.name === "") {
            setError((prevState) => ({ ...prevState, name: "Name could not be empty" }))
        }
        if (data.designation === "") {
            setError((prevState) => ({ ...prevState, designation: "Designation is required" }))
        }
        if (data.ratings === "") {
            setError((prevState) => ({ ...prevState, rating: "Ratings is required" }))
        }
        if (data.ratings > 5) {
            setError((prevState) => ({ ...prevState, rating: "Ratings must be 0 to 5" }))
        }
        if (data.ratings <= 5 && data.image && data.name && data.designation && data.ratings !== "") {
            if (update) {
                const dataIndex = users.findIndex((item) => item.id === data.id);
                users[dataIndex] = data
                setUpdate(null)
                navigate(-1)
            }
            else {
                console.log(data)
                data["id"] = users.length + 1;
                addingUser(data)
                navigate(-1)
            }
        }
    }

    //get value from form 
    const getdata = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev: any) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    }

    return (
        <section className="background">
            <form className="addUserContainer" onSubmit={(handleSubmit)} >
                <section className="header">
                    <div className="headingBox">
                        <div className="goBackIcon">
                            <i onClick={() => { navigate(-1); setUpdate(null) }} className="fa fa-arrow-left"></i>
                        </div>
                        <p className="heading">{addUserTitle}</p>
                    </div>
                </section>
                <section className="addUserData">
                    <div className="getInput">
                        <label className="label">Image : </label><br />
                        <InputField value={data.image} className="image" type="text" name="image" handleChange={getdata} />
                        {error.url && <p className="error">{error.url}</p>}
                    </div>
                    <div className="getInput">
                        <label className="label">Name :</label><br />
                        <InputField value={data.name} className="name" type="text" name="name" handleChange={getdata} />
                        {error.name && <p className="error">{error.name}</p>}
                    </div>
                    <div className="getInput">
                        <label className="label">Designation :</label><br />
                        <InputField value={data.designation} className="designation" type="text" name="designation" handleChange={getdata} />
                        {error.designation && <p className="error">{error.designation}</p>}
                    </div>
                    <div className="getInput">
                        <label className="label">Ratings :</label><br />
                        <InputField value={data.ratings} className="ratings" type="text" name="ratings" handleChange={getdata} />
                        {error.rating && <p className="error">{error.rating}</p>}
                    </div>
                </section>
                <section className="btnBox">
                    <div className="backBtn" onClick={() => { navigate(-1); setUpdate(null) }}>
                        Cancel
                    </div>
                    <PrimaryBtn className="btn" type="submit" btnTxt={btnTxt} />
                </section>
            </form>
        </section>
    );
}

export default AddUser;