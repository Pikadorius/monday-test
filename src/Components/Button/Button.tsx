import React from 'react';
import s from './Button.module.css'

type SizeType= 'big' | 'small' | 'default'

type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean
    style?: object
    size?: SizeType
}

const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled, style,size}) => {

    const buttonClass = size==="big"? s.big : size==='small'? s.small : s.default

    return (
        <button className={buttonClass} style={style} disabled={disabled} onClick={callBack}>{name}</button>
    );
};

export default Button;