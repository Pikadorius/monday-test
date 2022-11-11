import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Settings from './Components/Settings';
import counter from './Components/Counter/Counter';


const App = () => {

    //inputs states
    const [minTitle, setMinTitle]=useState(0)
    const [maxTitle, setMaxTitle]=useState(5)

    // counter values states
    const [counterMin, setCounterMin]=useState<number>(0)
    const [counterMax, setCounterMax]=useState<number>(5)
    const [currentValue, setCurrentValue]=useState(counterMin)


    // foo that checks conditions and sets counter values
    const setCounterValues = () => {
        if (minTitle>=0 && maxTitle!==minTitle) {
            setCounterMax(maxTitle)
            setCounterMin(minTitle)
            setCurrentValue(minTitle)
        }
    }

    // set all values from localStorage
    useEffect(()=>{
        const minData=localStorage.getItem('minValue')
        const maxData=localStorage.getItem('maxValue')
        const currentData=localStorage.getItem('currentValue')
        const minTitleData=localStorage.getItem('minTitle')
        const maxTitleData=localStorage.getItem('maxTitle')

        if (minData && maxData && currentData && minTitleData && maxTitleData) {
            setCurrentValue(JSON.parse(currentData))
            setCounterMax(JSON.parse(maxData))
            setCounterMin(JSON.parse(minData))
            setMinTitle(JSON.parse(minTitleData))
            setMaxTitle(JSON.parse(maxTitleData))
        }
    },[])
    // save all values in localStorage
    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(counterMax));
        localStorage.setItem('minValue', JSON.stringify(counterMin));
        localStorage.setItem('currentValue', JSON.stringify(currentValue));
        localStorage.setItem('minTitle', JSON.stringify(minTitle))
        localStorage.setItem('maxTitle', JSON.stringify(maxTitle))
    }, [counterMax, counterMin, currentValue])

    // warning in counter window if changed inputs
    let error='';
    if (minTitle!==counterMin || maxTitle!==counterMax) {
        error='enter values and press "set';
    }

    return (
        <div className="App">
            <Counter minValue={counterMin} maxValue={counterMax} currentValue={currentValue} setCurrentValue={setCurrentValue} error={error}/>
            <Settings minTitle={minTitle} maxTitle={maxTitle} setMinTitle={setMinTitle} setMaxTitle={setMaxTitle} setCounterValues={setCounterValues}/>
        </div>
    );
}

export default App;
