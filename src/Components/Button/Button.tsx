import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean
}

const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled}) => {


    return (
        <button className={s.btn} disabled={disabled} onClick={callBack}>{name}</button>
    );
};

export default Button;