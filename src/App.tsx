import React, {useState} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';

function App() {

    const minValue = 0;
    const maxValue = 5;
    const step = 1;
    const [currentValue, setCurrentValue] = useState<number>(minValue);


    const increaseValue = () => {
        const value = currentValue + step;
        value <= maxValue ? setCurrentValue(value) : setCurrentValue(maxValue)
    }

    const resetValue = () => {
        setCurrentValue(minValue);
    }

    return (
        <div className="App">
            <Counter minValue={minValue} maxValue={maxValue} currentValue={currentValue} increase={increaseValue}
                     reset={resetValue}/>
        </div>
    );
}

export default App;
