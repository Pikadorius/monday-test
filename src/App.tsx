import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import {StateType} from './index';

type AppType = {
    state: StateType
}

const App: React.FC<AppType> = ({state}) => {

    const chooseCounter=Number(prompt(`It's a lottery! Choose counter from 1 to ${state.counters.length}`));
    const counter = state.counters[chooseCounter];

    return (
        <div className="App">
            <Counter counter={counter}/>
            {/*<Counter counter={state.ciunters[1]}/>*/}
            {/*<Counter counter={state.counters[2]}/>*/}
        </div>
    );
}

export default App;
