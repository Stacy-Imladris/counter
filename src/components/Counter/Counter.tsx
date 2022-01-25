import React from "react";
import {ButtonUniversal} from "../ButtonUniversal";
import {DisplayCounter} from "./DisplayCounter";
import s from './Counter.module.css'

type CounterPropsType = {
    counterValue: number
    resetCounterValue: () => void
    incrementCounterValue: () => void
    isResetButtonDisabled: boolean
    isIncButtonDisabled: boolean
    styleForCounterValue: string
    error: string
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.container}>
            <div className={props.styleForCounterValue}>
                <DisplayCounter counterValue={props.counterValue} error={props.error}/>
            </div>
            <div className={s.buttons}>
                <div className={s.button}>
                    <ButtonUniversal
                        name={'inc'}
                        onClickCallback={props.incrementCounterValue}
                        isButtonDisabled={props.isIncButtonDisabled}
                    />
                </div>
                <div className={s.button}>
                    <ButtonUniversal
                        name={'reset'}
                        onClickCallback={props.resetCounterValue}
                        isButtonDisabled={props.isResetButtonDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

