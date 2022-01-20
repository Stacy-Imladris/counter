import React, {useEffect, useState} from 'react';
import {ButtonUniversal} from "../ButtonUniversal";
import {InputUniversal} from "../InputUniversal";
import s from './SettingsCounter.module.css'

type SettingsCounterPropsType = {
    startValue: number
    maxValue: number
    valueHandlerOnClick: () => void
    minValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void
    error: boolean
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {
    return (
        <div className={s.settings}>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'max value: '} defaultValue={props.maxValue} getValue={props.maxValueHandler} style={props.error}/>
            </div>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'start value: '} defaultValue={props.startValue} getValue={props.minValueHandler} style={props.error}/>
            </div>
            <div className={s.button}>
                <ButtonUniversal name={'set'} disabledButtonOrNot={props.error} onClickCallback={props.valueHandlerOnClick}/>
            </div>
        </div>
    );
};