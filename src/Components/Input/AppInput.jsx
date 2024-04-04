export const InputField = (props) => {
    return (
        <input value={props.value} type={props.type} name={props.name} className={props.className} placeholder={props.placeholder} onChange={props.handleChange}/>
    );
}
