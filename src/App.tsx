import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
import {Grid, Paper} from "@mui/material";
import s from './components/Counter/Counter.module.css'

function App() {
    const startValueAsString = localStorage.getItem('startValue')
    const maxValueAsString = localStorage.getItem('maxValue')
    const [startValue, setStartValue] = useState<number>(startValueAsString ? JSON.parse(startValueAsString) : 0)
    const [maxValue, setMaxValue] = useState<number>(maxValueAsString ? JSON.parse(maxValueAsString) : 5)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [error, setError] = useState<string>('')
    const isInputStyleError = error === 'Incorrect value!'
    const isResetButtonDisabled = counterValue === startValue || error !== ''
    const isIncButtonDisabled = counterValue >= maxValue || error !== ''
    const isSetButtonDisabled = error !== 'Enter values and press \'set\''
    const incrementCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)
    const styleForCounterValue = `${s.standart} ${counterValue === maxValue || error === 'Incorrect value!' ? s.red : s.green}`
    const startValueHandler = (value: number) => {
        setStartValue(value)
        if (value < maxValue && value >= 0) {
            setError('Enter values and press \'set\'')
        } else {
            setError('Incorrect value!')
        }
    }
    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value > startValue && value > 0) {
            setError('Enter values and press \'set\'')
        } else {
            setError('Incorrect value!')
        }
    }
    const valueHandlerOnClick = () => {
        setCounterValue(startValue)
        setError('')
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    return (
        <Grid container direction="row" spacing={5} justifyContent="center" alignItems="center" height={'700px'}>
            <Grid item>
                <Paper elevation={3}>
                    <SettingsCounter
                        startValue={startValue}
                        maxValue={maxValue}
                        valueHandlerOnClick={valueHandlerOnClick}
                        startValueHandler={startValueHandler}
                        maxValueHandler={maxValueHandler}
                        isInputStyleError={isInputStyleError}
                        isSetButtonDisabled={isSetButtonDisabled}/>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={3}>
                    <Counter
                        counterValue={counterValue}
                        resetCounterValue={resetCounterValue}
                        incrementCounterValue={incrementCounterValue}
                        error={error}
                        styleForCounterValue={styleForCounterValue}
                        isResetButtonDisabled={isResetButtonDisabled}
                        isIncButtonDisabled={isIncButtonDisabled}/>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;