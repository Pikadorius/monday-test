import React, {ChangeEvent} from 'react';
import Button from './Button/Button';

type SettingsType = {
    minTitle: number
    maxTitle: number
    setMinTitle: (minValue: number) => void
    setMaxTitle: (maxValue: number) => void
    setCounterValues: () => void
    onFocus: ()=>void
}

const Settings: React.FC<SettingsType> = ({minTitle, maxTitle, setMinTitle, setMaxTitle, setCounterValues, onFocus}) => {
    const setInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinTitle(Number(e.currentTarget.value));
    }
    const setInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxTitle(Number(e.currentTarget.value));
    }

    return (
        <div>
            <input type={'number'} value={minTitle} onChange={setInputMin} onFocus={onFocus}/>
            <input type={'number'} value={maxTitle} onChange={setInputMax} onFocus={onFocus}/>
            <Button name={'set'} callBack={setCounterValues} disabled={minTitle < 0 || maxTitle <= minTitle}/>
        </div>
    );
};

export default Settings;