import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import s from "./Counter.module.css";

function App() {

    const startValue = 0
    const endValue = 5
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const incrementCounterValue = () => counterValue < endValue && setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)
    const styleForCounterValue = `${s.standart} ${counterValue === endValue ? s.red : s.green}`
    const disabledResetButtonOrNot = counterValue === startValue
    const disabledIncButtonOrNot = counterValue >= endValue

    return (
        <div className="App">
            <Counter
                counterValue={counterValue}
                resetCounterValue={resetCounterValue}
                incrementCounterValue={incrementCounterValue}
                disabledResetButtonOrNot={disabledResetButtonOrNot}
                disabledIncButtonOrNot={disabledIncButtonOrNot}
                styleForCounterValue={styleForCounterValue}
            />
        </div>
    );
}

export default App;
