import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import {CounterType} from '../../index';

type CounterPropsType = {
    counter: CounterType
}


const Counter: React.FC<CounterPropsType> = ({counter}) => {

    // стили для универсальной кнопки
    const [currentValue, setCurrentValue] = useState<number>(counter.minValue)

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

    const increaseValue = () => {
        const value = currentValue + counter.step;
        value <= counter.maxValue ? setCurrentValue(value) : setCurrentValue(counter.maxValue)
    }

    const resetValue = () => {
        setCurrentValue(counter.minValue);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counterWindow}>
                {/*Табло с цифрой. В стилях проверется равно ли текущее значение максимальному*/}
                <div
                    className={currentValue === counter.maxValue ? `${s.counterItem} ${s.maxCounterItem}` : s.counterItem}>{currentValue}
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
                <Button style={currentValue === counter.maxValue ? disabledButtonStyle : buttonStyle} name={'inc'}
                        callBack={increaseValue}
                        disabled={currentValue === counter.maxValue}/>
                <Button style={currentValue === counter.minValue ? disabledButtonStyle : buttonStyle} name={'reset'}
                        callBack={resetValue}
                        disabled={currentValue === counter.minValue}/>
            </div>
        </div>
    );
};

export default Counter;
