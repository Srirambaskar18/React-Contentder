import React, { FC } from "react";

interface InputFieldProps {
    value?: any;
    type: any;
    name?: string;
    className?: string;
    placeholder?: string;
    handleChange?: (event:any) => void;
}


export const InputField: FC<InputFieldProps> = ({ value, name, type, className, placeholder, handleChange }) => {
    return (<>
       <input value={value} type={type} name={name} className={className} placeholder={placeholder} onChange={handleChange} />
       </>
    );
}
