
const PrimeButton = (props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.handleclick}>{props.buttontext}</button>
    );
}
export default PrimeButton