import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//типизация счетчика
export type CounterType = {
    minValue: number
    maxValue: number
    step: number
}
//типизация стейта
export type StateType = {
    counters: CounterType[]
}
//стейт счетчиков
const state: StateType = {
    counters: [
        {minValue: 0, maxValue: 5, step: 1},
        {minValue: 0, maxValue: 20, step: 2},
        {minValue: 0, maxValue: 50, step: 8},
        {minValue: -50, maxValue: 50, step: 5},
        {minValue: 0, maxValue: 100, step: 18},
        {minValue: -100, maxValue: 100, step: 25},
    ]
}


ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);