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
                <Button  name={'inc'}
                        callBack={increaseValue}
                        disabled={currentValue === counter.maxValue}/>
                <Button name={'reset'}
                        callBack={resetValue}
                        disabled={currentValue === counter.minValue}/>
            </div>
        </div>
    );
};

export default Counter;
