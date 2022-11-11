import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Settings from './Components/Settings';


const App = () => {

    //inputs states
    const [minTitle, setMinTitle] = useState(0)
    const [maxTitle, setMaxTitle] = useState(5)

    // counter values states
    const [counterMin, setCounterMin] = useState<number>(0)
    const [counterMax, setCounterMax] = useState<number>(5)
    const [currentValue, setCurrentValue] = useState(counterMin)

    // errors state
    const [error, setError] = useState<string>('')


    // foo that checks conditions and sets counter values and error if conditions true
    const setCounterValues = () => {
        if (minTitle >= 0 && maxTitle !== minTitle) {
            setCounterMax(maxTitle)
            setCounterMin(minTitle)
            setCurrentValue(minTitle)
            setError('')
        }
    }

    // set all values from localStorage
    useEffect(() => {
        const minData = localStorage.getItem('minValue')
        const maxData = localStorage.getItem('maxValue')
        const currentData = localStorage.getItem('currentValue')
        const minTitleData = localStorage.getItem('minTitle')
        const maxTitleData = localStorage.getItem('maxTitle')
        const errorData = localStorage.getItem('error')

        if (minData && maxData && currentData && minTitleData && maxTitleData && errorData) {
            setCurrentValue(JSON.parse(currentData))
            setCounterMax(JSON.parse(maxData))
            setCounterMin(JSON.parse(minData))
            setMinTitle(JSON.parse(minTitleData))
            setMaxTitle(JSON.parse(maxTitleData))
            setError(JSON.parse(errorData))
        }
    }, [])
    // save all values in localStorage
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(counterMax));
        localStorage.setItem('minValue', JSON.stringify(counterMin));
        localStorage.setItem('currentValue', JSON.stringify(currentValue));
        localStorage.setItem('minTitle', JSON.stringify(minTitle))
        localStorage.setItem('maxTitle', JSON.stringify(maxTitle))
        localStorage.setItem('error', JSON.stringify(error))
    }, [counterMax, counterMin,error, currentValue, minTitle, maxTitle])

    // warning for min input
    const setMinTitleHandler = (value: number) => {
        if (value<0 || value>=maxTitle) {
            setError('Incorrect value!')
        }
        else setError('enter values and press "set"')
        setMinTitle(value)
    }
    // warning for max input
    const setMaxTitleHandler = (value: number) => {
        value>minTitle? setError('enter values and press "set"') : setError('Incorrect value!')
        setMaxTitle(value)
    }
    // warning for input in focus
    const FocusHandler = () => {
        error || setError('enter values and press "set"')
    }

    return (
        <div className="App">
            <Counter minValue={counterMin} maxValue={counterMax} currentValue={currentValue}
                     setCurrentValue={setCurrentValue} error={error}/>
            <Settings minTitle={minTitle} maxTitle={maxTitle} setMinTitle={setMinTitleHandler} setMaxTitle={setMaxTitleHandler}
                      setCounterValues={setCounterValues} onFocus={FocusHandler}/>
        </div>
    );
}

export default App;
