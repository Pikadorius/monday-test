import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';

type CounterType = {
    minValue: number
    maxValue: number
    currentValue: number

    increase: () => void
    reset: () => void
}


const Counter: React.FC<CounterType> = ({minValue, maxValue, currentValue, increase, reset}) => {

    // стили для универсальной кнопки
    const buttonStyle = {
        display: 'inline-block',
        maxWidth: ' 80px',
        height: '20px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        color: '#282c34',
        fontWeight: '600',
    }
    const disabledButtonStyle = {...buttonStyle, opacity: 0.5}

    return (
        <div className={s.wrapper}>
            <div className={s.counterWindow}>
                {/*Табло с цифрой. В стилях проверется равно ли текущее значение максимальному*/}
                <div
                    className={currentValue === maxValue ? `${s.counterItem} ${s.maxCounterItem}` : s.counterItem}>{currentValue}
                </div>
            </div>

           {/* {<div className={s.buttonWindow}>
                <button className={s.buttonItem} onClick={increase}
                        disabled={currentValue >= maxValue}>inc
                </button>
                <button className={s.buttonItem} onClick={reset}
                        disabled={currentValue === minValue}>reset
                </button>
            </div>}*/}

            {/*Поле с универсальными кнопками*/}
            <div className={s.buttonWindow}>
                <Button style={currentValue === maxValue ? disabledButtonStyle : buttonStyle} name={'inc'} callBack={increase}
                        disabled={currentValue === maxValue}/>
                <Button style={currentValue === minValue ? disabledButtonStyle : buttonStyle} name={'reset'} callBack={reset}
                        disabled={currentValue === minValue}/>
            </div>
        </div>
    );
};

export default Counter;