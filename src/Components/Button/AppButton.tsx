import React, { FC } from "react";

interface PrimeButtonProps {
    type?: any;
    className: string;
    handleClick?: () => void;
    btnTxt: string;
}

export const PrimeButton: FC<PrimeButtonProps> = ({ type, className, handleClick, btnTxt }) => {

    return (
        <button type={type} className={className} onClick={handleClick}>{btnTxt}</button>
    );
}
