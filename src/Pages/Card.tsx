import "./Card.scss"
import React, { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../Components/Button/AppButton";

interface CardProps {
    user: {
        image: string;
        name: string;
        designation: string;
        ratings: number;
        id: number;
    };
    handleDelete: (id: number) => void;
    handleUpdate: (id: number) => void;
}

export const Card:FC <CardProps> = ({ user, handleDelete, handleUpdate }) => {
    const navigate = useNavigate()
    let ratingicon: ReactElement[] = [];
    let i: number;
    const getratings = (rate: any) => {
        for (i = 1; i <= 5; i++) {
            if (i <= rate) {
                ratingicon.push(<i className="fa fa-star ratingIcon"></i>)
            }
            else {
                ratingicon.push(<i className="fa fa-star-o ratingIcon"></i>)
            }
        }
        return ratingicon;
    }

    return (
        <div className="card" >
            <div className="imagebox">
                <img className="image" src={user.image} alt="" />
            </div>
            <div className="rating">
                <h3 className="name">{user.name}</h3>
                <p className="designation">{user.designation}</p>
                <div className="rating" >
                    {getratings(user.ratings)}
                </div>
                <div className="btnBox">
                    <PrimaryBtn className="update" handleClick={() => { handleUpdate(user.id); navigate(`/user/update/${user.id}`)}} btnTxt={"Update"}/>
                    <PrimaryBtn className="delete" handleClick={() => { handleDelete(user.id) }} btnTxt={"Delete"}/>
                </div>
            </div>
        </div>
    );
}





