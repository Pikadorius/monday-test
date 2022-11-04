import React from 'react';
import './App.css';
import Counter2 from './Components/Counter/Counter2';
import {StateType} from './index';

type AppType = {
    state: StateType
}

const App2: React.FC<AppType> = ({state}) => {

    const counter = state.counters[0];
    const counter2=state.counters[1];
    return (
        <div className="App">
            <Counter2 counter={counter}/>
            <Counter2 counter={counter2}/>
        </div>
    );
}

export default App2;
