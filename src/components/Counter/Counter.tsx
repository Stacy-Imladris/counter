import React, {useCallback} from "react";
import {ButtonUniversal} from "../ButtonUniversal/ButtonUniversal";
import {DisplayCounter} from "./DisplayCounter/DisplayCounter";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../redux/store";
import {actions} from "../../redux/counter-reducer";

export const Counter = React.memo(() => {

    const dispatch = useDispatch()
    const startValue = useSelector<AppRootState, number>(state => state.counter.startValue)
    const endValue = useSelector<AppRootState, number>(state => state.counter.endValue)
    const counterValue = useSelector<AppRootState, number>(state => state.counter.counterValue)
    const errorText = useSelector<AppRootState, string>(state => state.counter.errorText)

    const incrementCounterValue = useCallback(() => {
        counterValue < endValue && dispatch(actions.incCounterValue())
    }, [dispatch, counterValue, endValue])

    const resetCounterValue = useCallback(() => {
        dispatch(actions.resetCounterValue(startValue))
    }, [dispatch, startValue])

    const isResetButtonDisabled = counterValue === startValue || errorText !== ''
    const isIncButtonDisabled = counterValue >= endValue || errorText !== ''
    const styleForCounterValue = `${s.standart} ${counterValue === endValue || errorText === 'Incorrect value!' ? s.red : s.green}`

    return (
        <div className={s.container}>
            <div className={styleForCounterValue}>
                <DisplayCounter/>
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <ButtonUniversal
                        name={'inc'}
                        onClickCallback={incrementCounterValue}
                        isButtonDisabled={isIncButtonDisabled}
                    />
                </div>
                <div className={s.button}>
                    <ButtonUniversal
                        name={'reset'}
                        onClickCallback={resetCounterValue}
                        isButtonDisabled={isResetButtonDisabled}
                    />
                </div>
            </div>
        </div>
    )
})

