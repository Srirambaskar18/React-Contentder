import userOne from "../assets/Images/userOne.jpg";
import userTwo from "../assets/Images/userTwo.jpg";
import userThree from "../assets/Images/userThree.jpg";
import userFour from "../assets/Images/userFour.jpg";

export  interface User {
    image: string,
    name: string,
    designation: string,
    ratings:any,
    id: any,
    password:string
}
const DefaultUser:Array<User> = [
    {
        image: userOne, name: "Asath", designation: "Civil Engineer", ratings: 4, id: 0,password:"sriram"
    },
    {
        image: userTwo, name: "Dhanam", designation: "Full-Stack developer", ratings: 4, id: 1,password:"sriram"
    },
    {
        image: userThree, name: "SriramBaskar", designation: "Front-End developer", ratings: 5, id: 2,password:"sriram"
    },
    {
        image: userFour, name: "Bhuvanesh", designation: "cricketer", ratings: 1, id: 3,password:"sriram"
    }
]

export default DefaultUser;