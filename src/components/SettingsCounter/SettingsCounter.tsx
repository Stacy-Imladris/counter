import React, {useEffect, useState} from 'react';
import {ButtonUniversal} from "../ButtonUniversal";
import {InputUniversal} from "../InputUniversal";
import s from './SettingsCounter.module.css'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    valueHandlerOnClick: () => void
    startValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void
    isInputStyleError: boolean
    isSetButtonDisabled: boolean
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {
    return (
        <div className={s.settings}>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'max value: '} defaultValue={props.maxValue} getValue={props.maxValueHandler} style={props.isInputStyleError}/>
            </div>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'start value: '} defaultValue={props.startValue} getValue={props.startValueHandler} style={props.isInputStyleError}/>
            </div>
            <div className={s.button}>
                <ButtonUniversal name={'set'} isButtonDisabled={props.isSetButtonDisabled} onClickCallback={props.valueHandlerOnClick}/>
            </div>
        </div>
    );
};