import { InputFeild } from "../../Components/Input/AppInput";
import PrimeButton from "../../Components/Button/AppButton";
import { useEffect, useState } from "react";
import './AddNewUser.scss';

export const AddNewUser = ({ reference, referenceArr, action, update, setUpdate }) => {
    const initialForm = {
        imageurl: '',
        profilename: '',
        designation: '',
        ratings: '',
        id: ''
    }

    const [data, setData] = useState(update ? update : initialForm);
    const [error, setError] = useState({ urlerror: '', nameerror: '', designationerror: '', ratingerror: '' })

    const modelClose = () => {
        setUpdate(null)
        action(false)
    }

    //form submit function
    const onCreateClick = (e) => {
        console.log(data.imageurl, 'checking')
        e.preventDefault();
        console.log(update, 'updatecheck')
        if (data.imageurl === '') {
            setError((prevState) => ({ ...prevState, urlerror: 'Imageurl is required' }))
        }
        if (data.profilename === '') {
            setError((prevState) => ({ ...prevState, nameerror: 'Profilename could not be Empty' }))
        }
        if (data.designation === '') {
            setError((prevState) => ({ ...prevState, designationerror: 'Designation is required' }))
        }
        if (data.ratings === '') {
            setError((prevState) => ({ ...prevState, ratingerror: 'Ratings is required' }))
        }
        if (data.imageurl && data.profilename && data.designation && data.ratings !== null) {
            if (update) {
                const dataindex = referenceArr.findIndex((item) => item.id === data.id);
                referenceArr[dataindex] = data
                modelClose()
            }
            else {
                console.log(data)
                data['id'] = referenceArr.length + 1;
                reference(data)
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
        <section className="addnew__bg">
            <form className="addnew__container" onSubmit={(onCreateClick)} >
                <section className="addnew__header">
                    <div className="addnew__headbox">
                        <p className="addnew__head">Create your card</p>
                    </div>
                    <div className="addnew__close">
                        <i className="fa fa-times-circle-o" onClick={() => {
                            modelClose()
                        }
                        }></i>
                    </div>
                </section>
                <section className="addnew__data">
                    {error.urlerror ? <p className="form__errors">{error.urlerror}</p> : <p className="form__errors"></p>}
                    <InputFeild value={data.imageurl} className="addnew__image" type="text" name="imageurl" placeholder="Image url" handlechange={getdata} />
                    <br />
                    {error.nameerror ? <p className="form__errors">{error.nameerror}</p> : <p className="form__errors"></p>}
                    <InputFeild value={data.profilename} className="addnew__name" type="text" name="profilename" placeholder="Name" handlechange={getdata} />
                    <br />
                    {error.designationerror ? <p className="form__errors">{error.designationerror}</p> : <p className="form__errors"></p>}
                    <InputFeild value={data.designation} className="addnew__designation" type="text" name="designation" placeholder="Designation" handlechange={getdata} />
                    <br />
                    {error.ratingerror ? <p className="form__errors">{error.ratingerror}</p> : <p className="form__errors"></p>}
                    <InputFeild value={data.ratings} className="addnew__ratings" type="text" name="ratings" placeholder="ratings" handlechange={getdata} />
                </section>
                <section className="addnew__create__buttonbox">
                    <PrimeButton className="addnew__create__button" type="submit" buttontext='CREATE' />
                </section>
            </form>
        </section>
    );
}