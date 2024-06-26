import { InputField } from "../../Components/Input/AppInput";
import { PrimeButton } from "../../Components/Button/AppButton";
import { useState } from "react";
import React, { FC } from "react";
import "./AddUser.scss";

interface AddUserProps {
    addingUser: ({ }) => void;
    propUsers: {
        image: string;
        name: any;
        designation: any;
        ratings: number;
        id: number;
    }[];
    action: (action: boolean) => void;

    update: {
        image: string;
        name: string;
        designation: string;
        ratings: number;
        id: number;
    };

    setUpdate: any;
}
export const AddUser: FC<AddUserProps> = ({ addingUser, propUsers, action, update, setUpdate }) => {
    let btnTxt: string;
    let addUserTitle: string;

    if (update) {
        btnTxt = 'UPDATE'
        addUserTitle = 'Update your card'
    }
    else {
        btnTxt = 'CREATE'
        addUserTitle = 'Create your card'
    }
    const initialForm: {
        image: string;
        name: string;
        designation: string;
        ratings: any;
        id: any;
    } = {
        image: "",
        name: "",
        designation: "",
        ratings: "",
        id: ""
    }

    const [data, setData] = useState(update ? update : initialForm);
    const [error, setError] = useState({ url: "", name: "", designation: "", rating: "" })

    const isClose = () => {
        setUpdate(null)
        action(false)
    }

    //form submit function
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (data.image === "") {
            setError((prevState) => ({ ...prevState, url: "Image is required" }))
        }
        if (data.name === "") {
            setError((prevState) => ({ ...prevState, name: "Name could not be Empty" }))
        }
        if (data.designation === "") {
            setError((prevState) => ({ ...prevState, designation: "Designation is required" }))
        }
        if (data.ratings === "") {
            setError((prevState) => ({ ...prevState, rating: "Ratings is required" }))
        }
        if (data.ratings >= 5) {
            setError((prevState) => ({ ...prevState, rating: "Ratings must be 0 to 5" }))
        }
        if (data.image && data.name && data.designation && data.ratings !== '' && data.ratings <= 5) {
            if (update) {
                const dataIndex = propUsers.findIndex((item) => item.id === data.id);
                propUsers[dataIndex] = data
                isClose()
            }
            else {
                console.log(data)
                data["id"] = propUsers.length + 1;
                addingUser(data)
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
                        <p className="heading">{addUserTitle}</p>
                    </div>
                    <div className="closeIcon">
                        <i className="fa fa-times-circle-o" onClick={() => {
                            isClose()
                        }
                        }></i>
                    </div>
                </section>
                <section className="addUserData">
                    {error.url && <p className="error">{error.url}</p>}
                    <InputField value={data.image} className="image" type="text" name="image" placeholder="Image url" handleChange={getdata} />
                    <br />
                    {error.name && <p className="error">{error.name}</p>}
                    <InputField value={data.name} className="name" type="text" name="name" placeholder="Name" handleChange={getdata} />
                    <br />
                    {error.designation && <p className="error">{error.designation}</p>}
                    <InputField value={data.designation} className="designation" type="text" name="designation" placeholder="Designation" handleChange={getdata} />
                    <br />
                    {error.rating && <p className="error">{error.rating}</p>}
                    <InputField value={data.ratings} className="ratings" type="text" name="ratings" placeholder="ratings" handleChange={getdata} />
                </section>
                <section className="btnBox">
                    <PrimeButton className="btn" type="submit" btnTxt={btnTxt} />
                </section>
            </form>
        </section>
    );
}