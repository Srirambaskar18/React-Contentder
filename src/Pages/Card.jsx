import "./Card.scss"

export const Card = ({user,handleDelete,handleUpdate}) => {
    let ratingicon=[];
    let i;
    const getratings=(rate)=>{
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
                    <button className="update" onClick={()=>{handleUpdate(user.id)}}>Update</button>
                    <button className="delete" onClick={()=>{handleDelete(user.id)}}>Delete</button>
                </div>
            </div>
        </div>
    );
}





    