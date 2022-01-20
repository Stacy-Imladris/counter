import React from "react";
import {ButtonUniversal} from "../ButtonUniversal";
import {DisplayCounter} from "./DisplayCounter";
import s from './Counter.module.css'

type CounterPropsType = {
    counterValue: number
    resetCounterValue: () => void
    incrementCounterValue: () => void
    disabledResetButtonOrNot: boolean
    disabledIncButtonOrNot: boolean
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
                        disabledButtonOrNot={props.disabledIncButtonOrNot}
                    />
                </div>
                <div className={s.button}>
                    <ButtonUniversal
                        name={'reset'}
                        onClickCallback={props.resetCounterValue}
                        disabledButtonOrNot={props.disabledResetButtonOrNot}
                    />
                </div>
            </div>
        </div>
    )
}

