import { InputField } from "../../Components/Input/AppInput";
import PrimeButton from "../../Components/Button/AppButton";
import { useState } from "react";
import './AddUser.scss';

export const AddUser = ({ addingUser,propUsers, action, update, setUpdate }) => {
    const initialForm = {
        image: '',
        name: '',
        designation: '',
        ratings: '',
        id: ''
    }

    const [data, setData] = useState(update ? update : initialForm);
    const [error, setError] = useState({ url: '', name: '', designation: '', rating: '' })

    const modelClose = () => {
        setUpdate(null)
        action(false)
    }

    //form submit function
    const handleSubmit = (e) => {
        console.log(data.image, 'checking')
        e.preventDefault();
        console.log(update, 'updatecheck')
        if (data.image === '') {
            setError((prevState) => ({ ...prevState, url: 'Image is required' }))
        }
        if (data.name === '') {
            setError((prevState) => ({ ...prevState, name: 'Name could not be Empty' }))
        }
        if (data.designation === '') {
            setError((prevState) => ({ ...prevState, designation: 'Designation is required' }))
        }
        if (data.ratings === '') {
            setError((prevState) => ({ ...prevState, rating: 'Ratings is required' }))
        }
        if (data.image && data.name && data.designation && data.ratings !== null) {
            if (update) {
                const dataIndex = propUsers.findIndex((item) => item.id === data.id);
                propUsers[dataIndex] = data
                modelClose()
            }
            else {
                console.log(data)
                data['id'] = propUsers.length + 1;
                addingUser(data)
            }
        }
    }

    //get value from form 
    const getdata = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }

    return (
        <section className="background">
            <form className="addUserContainer" onSubmit={(handleSubmit)} >
                <section className="header">
                    <div className="headingBox">
                        <p className="heading">Create your card</p>
                    </div>
                    <div className="closeIcon">
                        <i className="fa fa-times-circle-o" onClick={() => {
                            modelClose()
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
                    <PrimeButton className="btn" type="submit" btnTxt='CREATE' />
                </section>
            </form>
        </section>
    );
}