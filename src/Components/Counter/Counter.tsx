import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';

type CounterPropsType = {
    minValue: number
    maxValue: number
    currentValue: number;
    setCurrentValue: (value: number) => void
    error: string
}


const Counter: React.FC<CounterPropsType> = ({minValue, maxValue, currentValue, setCurrentValue, error}) => {

    const increaseValue = () => {
        setCurrentValue(currentValue + 1);
    }

    const resetValue = () => {
        setCurrentValue(minValue)
    }
    return (
        // Обертка
        <div className={s.wrapper}>
            {/*Табло с цифрой. В стилях проверется равно ли текущее значение максимальному*/}
            <div className={s.counterWindow}>
                {error || (<div className={currentValue === maxValue ? `${s.counterItem} ${s.maxCounterItem}` : s.counterItem}>{currentValue}</div>)}
            </div>
            {/*Поле кнопок*/}
            <div className={s.buttonWindow}>
                <Button name={'inc'}
                        callBack={increaseValue}
                        disabled={currentValue === maxValue || error!==''}/>
                <Button name={'reset'}
                        callBack={resetValue}
                        disabled={currentValue === minValue || error!==''}/>
            </div>
        </div>
    )
}


export default Counter;
