import React, {useState} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import {StateType} from './index';

type AppType = {
    state: StateType
}

function App({state}: AppType) {

    // const minValue = 0;
    // const maxValue = 5;
    // const step = 1;
    const counter=state.counters[1];
    const [currentValue, setCurrentValue] = useState<number>(counter.minValue);


    const increaseValue = () => {
        const value = currentValue + counter.step;
        value <= counter.maxValue ? setCurrentValue(value) : setCurrentValue(counter.maxValue)
    }

    const resetValue = () => {
        setCurrentValue(counter.minValue);
    }

    return (
        <div className="App">
            <Counter minValue={counter.minValue} maxValue={counter.maxValue} currentValue={currentValue} increase={increaseValue}
                     reset={resetValue}/>
        </div>
    );
}

export default App;
