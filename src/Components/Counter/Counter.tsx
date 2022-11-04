import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import {CounterType} from '../../index';

type CounterPropsType = {
    counter: CounterType
}


const Counter: React.FC<CounterPropsType> = ({counter}) => {

    //стейт для текущего значения
    const [currentValue, setCurrentValue] = useState<number>(counter.minValue)
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
    //увеличение на заданный шаг
    const increaseValue = () => {
        const value = currentValue + counter.step;
        value <= counter.maxValue ? setCurrentValue(value) : setCurrentValue(counter.maxValue)
    }
    //сброс на минимальное значение
    const resetValue = () => {
        setCurrentValue(counter.minValue);
    }

    return (
        // Обертка
        <div className={s.wrapper}>
            {/*Табло с цифрой. В стилях проверется равно ли текущее значение максимальному*/}
            <div className={s.counterWindow}>
                <div
                    className={currentValue === counter.maxValue ? `${s.counterItem} ${s.maxCounterItem}` : s.counterItem}>{currentValue}
                </div>
            </div>
            {/*Поле кнопок*/}
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
