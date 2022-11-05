import React, {useState} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import {CounterType, StateType} from './index';
import Button from './Components/Button/Button';

type AppType = {
    state: StateType
}

const App: React.FC<AppType> = ({state}) => {

    const [counter, setCounter]=useState<number>(0)

    let count: CounterType = state.counters[counter];
    const setCount = (i: number) => {
        setCounter(i)
    }


    return (

        <div className="App">
            <Counter counter={count} reset={count.minValue}/>
             <h3>Press reset after selecting counter!</h3>
            {state.counters.map((c, i) => <Button name={`Counter №${i + 1}: \n ${c.minValue} to ${c.maxValue} \n step: ${c.step}`} callBack={() => setCount(i)} disabled={false}/>)}
        </div>
    );
}

export default App;
