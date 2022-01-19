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
    const [errorStyle, setErrorStyle] = useState<boolean>(false)

    const minValueHandler = (value: number) => {
        setStartValue(value)
        if (value < maxValue){
            setErrorStyle(false)
            props.errorHandler('Enter values and press \'set\'')
        } else {
            setErrorStyle(true)
            props.errorHandler('Incorrect value!')
        }
    }
    const maxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value > startValue){
            setErrorStyle(false)
            props.errorHandler('Enter values and press \'set\'')
        } else {
            setErrorStyle(true)
            props.errorHandler('Incorrect value!')
        }
    }
    const valueHandler = () => {
        props.valueHandler(startValue, maxValue)
        setErrorStyle(false)
        props.errorHandler('')
    }

    return (
        <div>
            <InputUniversal type={'number'} title={'max value: '} defaultValue={props.maxValue} getValue={maxValueHandler} style={errorStyle}/>
            <InputUniversal type={'number'} title={'start value: '} defaultValue={props.startValue} getValue={minValueHandler} style={errorStyle}/>
            <ButtonUniversal name={'set'} disabledButtonOrNot={errorStyle} onClickCallback={valueHandler}/>
        </div>
    );
};