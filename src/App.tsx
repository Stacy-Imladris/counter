import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import s from "./components/Counter/Counter.module.css";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [error, setError] = useState<string>('')
    const incrementCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)
    const styleForCounterValue = `${s.standart} ${counterValue === maxValue ? s.red : s.green}`
    const disabledResetButtonOrNot = counterValue === startValue
    const disabledIncButtonOrNot = counterValue >= maxValue
    const valueHandler = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
    }
    const errorHandler = (error: string) => {
        setError(error)
    }
    useEffect(() => {
        const startValueAsString = localStorage.getItem('startValue')
        const maxValueAsString = localStorage.getItem('maxValue')
        if (startValueAsString && maxValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
            setMaxValue(JSON.parse(maxValueAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    return (
        <div className="App">
            <SettingsCounter
                startValue={startValue}
                maxValue={maxValue}
                valueHandler={valueHandler}
                errorHandler={errorHandler}
            />
            <Counter
                counterValue={counterValue}
                resetCounterValue={resetCounterValue}
                incrementCounterValue={incrementCounterValue}
                disabledResetButtonOrNot={disabledResetButtonOrNot}
                disabledIncButtonOrNot={disabledIncButtonOrNot}
                styleForCounterValue={styleForCounterValue}
                error={error}
            />
        </div>
    );
}

export default App;
