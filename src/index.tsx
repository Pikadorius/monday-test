import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';



export type CounterType = {
    minValue: number
    maxValue: number
    step: number
}

export type StateType = {
    counters: CounterType[]
}

const state:StateType = {
    counters: [
        {minValue:0,maxValue:5,step:1},
        {minValue:0,maxValue:20,step:2},
        {minValue:0,maxValue:50,step:8},
        {minValue:0,maxValue:50,step:8},
    ]
}



ReactDOM.render(
    <App2 state={state}/>,
    document.getElementById('root')
);