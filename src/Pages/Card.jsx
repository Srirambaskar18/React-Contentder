import './Card.scss'

export const Card = ({usercard,removeFunction,updateFunction}) => {
    let ratingicon=[];
    let i;
    const getratings=(rate)=>{
        for (i = 1; i <= 5; i++) {
            if (i <= rate) {
                ratingicon.push(<i className="fa fa-star checked"></i>)
            }
            else {
                ratingicon.push(<i className="fa fa-star-o checked"></i>)
            }
        }
        return ratingicon;
    }
    
    return (
        <div className="contentder__cards" >
            <div className="contentder__cards__imagebox">
                <img className="contentder__cards__image" src={usercard.imageurl} alt="" />
            </div>
            <div className="contentder__card__name__rating">
                <h3 className="contentder__card__name">{usercard.profilename}</h3>
                <p className="contentder__card__designation">{usercard.designation}</p>
                <div className="contentder__card__rating">
                    {getratings(usercard.ratings)}
                </div>
                <div className="remove__update__button">
                    <button className="updateCard" onClick={()=>{updateFunction(usercard.id)}}>Update</button>
                    <button className="removeCard" onClick={()=>{removeFunction(usercard.id)}}>Delete</button>
                </div>
            </div>
        </div>
    );
}