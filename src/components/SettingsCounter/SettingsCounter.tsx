import React, {useCallback} from 'react';
import {ButtonUniversal} from "../ButtonUniversal/ButtonUniversal";
import {InputUniversal} from "../InputUniversal/InputUniversal";
import s from './SettingsCounter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {actions} from "../../redux/counter-reducer";
import {saveState} from "../../utils/localstorage";

export const SettingsCounter = React.memo(() => {

    const dispatch = useDispatch()
    const startValue = useSelector<AppRootState, number>(state => state.counter.startValue)
    const endValue = useSelector<AppRootState, number>(state => state.counter.endValue)
    const errorText = useSelector<AppRootState, string>(state => state.counter.errorText)

    const isSetButtonDisabled = errorText !== 'Enter values and press \'set\''
    const isInputStyleError = errorText === 'Incorrect value!'

    const startValueHandler = useCallback((value: number) => {
        dispatch(actions.changeStartValue(value))
        if (value < endValue && value >= 0 && Number.isInteger(value)) {
            dispatch(actions.changeErrorText('Enter values and press \'set\''))
        } else {
            dispatch(actions.changeErrorText('Incorrect value!'))
        }
    }, [dispatch, endValue])

    const endValueHandler = useCallback((value: number) => {
        dispatch(actions.changeEndValue(value))
        if (value > startValue && value > 0 && Number.isInteger(value)) {
            dispatch(actions.changeErrorText('Enter values and press \'set\''))
        } else {
            dispatch(actions.changeErrorText('Incorrect value!'))
        }
    }, [dispatch, startValue])

    const valueHandlerOnClick = useCallback(() => {
        dispatch(actions.resetCounterValue(startValue))
        dispatch(actions.changeErrorText(''))
        saveState(startValue, endValue)
    }, [dispatch, startValue, endValue])

    return (
        <div className={s.settings}>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'end value: '} defaultValue={endValue} getValue={endValueHandler}
                                style={isInputStyleError}/>
            </div>
            <div className={s.input}>
                <InputUniversal type={'number'} title={'start value: '} defaultValue={startValue}
                                getValue={startValueHandler} style={isInputStyleError}/>
            </div>
            <div className={s.button}>
                <ButtonUniversal name={'set'} isButtonDisabled={isSetButtonDisabled}
                                 onClickCallback={valueHandlerOnClick}/>
            </div>
        </div>
    )
})