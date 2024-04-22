import React, { FC } from "react";

interface PrimaryBtnProps {
    type?: any;
    className: string;
    handleClick?: (e:any) => void;
    btnTxt: any;
}

export const PrimaryBtn: FC<PrimaryBtnProps> = ({ type, className, handleClick, btnTxt }) => {

    return (
        <button type={type} className={className} onClick={handleClick}>{btnTxt}</button>
    );
}
