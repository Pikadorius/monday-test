import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disabled: boolean
    style?: object
}

const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled, style}) => {

    const onClickButtonHandler = () => {
        callBack();
    }

    return (
        <button style={style} disabled={disabled} onClick={onClickButtonHandler}>{name}</button>
    );
};

export default Button;