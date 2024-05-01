import React, { FC } from "react";

interface InputFieldProps {
    value?: any;
    type: any;
    name?: string;
    className?: string;
    placeholder?: string;
    handleChange?: (event: any) => void;
    maxLength?: number;
    readonly?:any;
}


const InputField: FC<InputFieldProps> = ({ value, name, type, className, placeholder, handleChange, maxLength ,readonly}) => {
    return (<>
        <input value={value} type={type} name={name} className={className} placeholder={placeholder} onChange={handleChange} maxLength={maxLength} readonly={readonly}/>
    </>
    );
}
export default InputField;
