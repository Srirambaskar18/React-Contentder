
const PrimeButton = (props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.handleClick}>{props.btnTxt}</button>
    );
}
export default PrimeButton