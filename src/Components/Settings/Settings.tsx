import React, {ChangeEvent} from 'react';
import Button from '../Button/Button';
import s from './Settings.module.css'

type SettingsType = {
    minTitle: number
    maxTitle: number
    setMinTitle: (minValue: number) => void
    setMaxTitle: (maxValue: number) => void
    setCounterValues: () => void
    onFocus: ()=>void
    disabled: boolean
}

const Settings: React.FC<SettingsType> = ({minTitle, maxTitle, setMinTitle, setMaxTitle, setCounterValues, onFocus, disabled}) => {
    const setInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinTitle(Number(e.currentTarget.value));
    }
    const setInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxTitle(Number(e.currentTarget.value));
    }

    return (
       /* <div>
            <input type={'number'} value={minTitle} onChange={setInputMin} onFocus={onFocus}/>
            <input type={'number'} value={maxTitle} onChange={setInputMax} onFocus={onFocus}/>
            <Button name={'set'} callBack={setCounterValues} disabled={minTitle < 0 || maxTitle <= minTitle || disabled}/>
        </div>*/

    <div className={s.wrapper}>
        <div className={s.counterWindow}>
            <div className={s.inputName}>Min. value: <input type={'number'} value={minTitle} onChange={setInputMin} onFocus={onFocus}
                        className={s.input}/></div>
            <div className={s.inputName}>Max. value: <input type={'number'} value={maxTitle} onChange={setInputMax} onFocus={onFocus}
                        className={s.input}/></div>
        </div>
        {/*Поле кнопок*/}
        <div className={s.buttonWindow}>
            <Button name={'set'} callBack={setCounterValues} disabled={minTitle < 0 || maxTitle <= minTitle || disabled}/>
        </div>
    </div>

    );
};

export default Settings;