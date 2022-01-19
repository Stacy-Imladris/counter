import React, {useEffect, useState} from 'react';
import {ButtonUniversal} from "../ButtonUniversal";
import {InputUniversal} from "../InputUniversal";

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    valueHandler: (startValue: number, maxValue: number) => void
    errorHandler: (error: string) => void
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const [startValue, setStartValue] = useState<number>(props.startValue)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [error, setError] = useState<string>('')

    const minValueHandler = (value: number) => {
        if (value < maxValue){
            setStartValue(value)
            setError('Enter values and press \'set\'')
            props.errorHandler(error)
        } else {
            setError('Incorrect value!')
            props.errorHandler(error)
        }
    }
    const maxValueHandler = (value: number) => {
        if (value > startValue){
            setMaxValue(value)
            setError('Enter values and press \'set\'')
            props.errorHandler(error)
        } else {
            setError('Incorrect value!')
            props.errorHandler(error)
        }
    }
    const valueHandler = () => {
        props.valueHandler(startValue, maxValue)
        setError('')
        props.errorHandler(error)
    }

    return (
        <div>
            <InputUniversal type={'number'} title={'max value: '} defaultValue={props.maxValue} getValue={maxValueHandler}/>
            <InputUniversal type={'number'} title={'start value: '} defaultValue={props.startValue} getValue={minValueHandler}/>
            <ButtonUniversal name={'set'} disabledButtonOrNot={error === 'Incorrect value!'} onClickCallback={valueHandler}/>
        </div>
    );
};