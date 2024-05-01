import React, { useContext, useState } from "react"
import "./ProfilePage.scss";
import { AuthContext } from "../../Routes/Auth";
import InputField from "../../Components/Input/AppInput";
import PrimaryBtn from "../../Components/Button/AppButton";
import DefaultUser, { User } from "../../Components/DefaultUser";

const ProfilePage = () => {
  const { getProfileData, handleGetProfiledata } = useContext(AuthContext)
  const [isChange, setIsChange] = useState<boolean>(false)
  const [updateData, setUpdateData] = useState<User>(getProfileData)
  //isChange
  let changeTxt : string;
  if (isChange) {
    changeTxt = "Back"
  }
  else {
    changeTxt = "Edit"
  }

  //update
  const handleUpdate = () => {
    const dataIndex:number= DefaultUser.findIndex((item) => item.id === updateData.id);
    DefaultUser[dataIndex] = updateData
    setIsChange(false)
    handleGetProfiledata(updateData)
  }
  //getting data from input field
  const getData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateData((prev: any) => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }
  return (
    <section className="profileBackground">
      <div className="profilePage">
        <section className="pageHeader">
          <img src={updateData.image} alt="profileImg" className="profileImg" />
          <div className="userDetailBox">
            <p className="profileName"><span>Name :</span> {getProfileData.name}</p>
            <p className="userGmail"><span>gmail :</span> {getProfileData.name.toLowerCase()}18@gmail.com</p>
          </div>
        </section>
       
          <form className="getUserData">
            <div className="getInput">
              <label className="label">Username : </label><br />
              {isChange ?<InputField className="profileUser" type="text" name="name" handleChange={getData} />:<InputField value={getProfileData.name} className="profileUser" type="text" name="name" readonly="readonly"/>}
              {/* {error.url && <p className="error">{error.url}</p>} */}
            </div>
            <div className="getInput">
              <label className="label">Password : </label><br />
              {isChange ?<InputField  className="profileUser" type="text" name="password" handleChange={getData} />:<InputField value={getProfileData.password} className="profileUser" type="text" name="password" readonly="readonly"/>}
              {/* {error.url && <p className="error">{error.url}</p>} */}
            </div>
            <div className="getInput">
              <label className="label">Designation : </label><br />
              {isChange ?<InputField  className="profileUser" type="text" name="designation" handleChange={getData} />:<InputField value={getProfileData.designation} className="profileUser" type="text" name="designation" readonly="readonly"/>}
              {/* {error.url && <p className="error">{error.url}</p>} */}
            </div>
            <div className="getInput">
              <label className="label">Ratings : </label><br />
              {isChange ?<InputField  className="profileUser" type="text" name="ratings" handleChange={getData} />:<InputField value={getProfileData.ratings} className="profileUser" type="text" name="ratings" readonly="readonly"/>}
              {/* {error.url && <p className="error">{error.url}</p>} */}
            </div>
          </form>
        <div className="btnBox">
          {isChange ?
            <>
              <PrimaryBtn className="backBtn" btnTxt="Save" handleClick={() => handleUpdate()} />
              <PrimaryBtn className="btn" btnTxt={changeTxt} handleClick={() => setIsChange(!isChange)} />
            </>
            :
            <PrimaryBtn className="btn" btnTxt={changeTxt} handleClick={() => setIsChange(!isChange)} />}
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
