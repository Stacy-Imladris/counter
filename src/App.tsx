import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
import {Paper, Stack, styled} from "@mui/material";
import s from './components/Counter/Counter.module.css'

function App() {
    const startValueAsString = localStorage.getItem('startValue')
    const maxValueAsString = localStorage.getItem('maxValue')
    const [startValue, setStartValue] = useState<number>(startValueAsString ? JSON.parse(startValueAsString) : 0)
    const [maxValue, setMaxValue] = useState<number>(maxValueAsString ? JSON.parse(maxValueAsString) : 5)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [error, setError] = useState<string>('')
    const errorBoolean = error === 'Incorrect value!'
    const incrementCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)
    const styleForCounterValue = `${s.standart} ${counterValue === maxValue || error === 'Incorrect value!' ? s.red : s.green}`
    const disabledResetButtonOrNot = counterValue === startValue || error !== ''
    const disabledIncButtonOrNot = counterValue >= maxValue || error !== ''
    const minValueHandler = (value: number) => {
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
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setError('')
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" height={'500px'}>
            <Item>
                <SettingsCounter
                    startValue={startValue}
                    maxValue={maxValue}
                    valueHandlerOnClick={valueHandlerOnClick}
                    minValueHandler={minValueHandler}
                    maxValueHandler={maxValueHandler}
                    error={errorBoolean}
                />
            </Item>
            <Item>
                <Counter
                    counterValue={counterValue}
                    resetCounterValue={resetCounterValue}
                    incrementCounterValue={incrementCounterValue}
                    disabledResetButtonOrNot={disabledResetButtonOrNot}
                    disabledIncButtonOrNot={disabledIncButtonOrNot}
                    styleForCounterValue={styleForCounterValue}
                    error={error}
                />
            </Item>
        </Stack>
    );
}

export default App;