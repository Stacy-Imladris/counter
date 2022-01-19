import React from "react";
import {ButtonUniversal} from "../ButtonUniversal";
import s from "./Counter.module.css"
import {DisplayCounter} from "./DisplayCounter";

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
        <div className={s.main}>
            <div className={props.styleForCounterValue}>
                <DisplayCounter counterValue={props.counterValue} error={props.error}/>
            </div>
            <div className={s.container}>
                <ButtonUniversal
                    name={'inc'}
                    onClickCallback={props.incrementCounterValue}
                    disabledButtonOrNot={props.disabledIncButtonOrNot}
                />
                <ButtonUniversal
                    name={'reset'}
                    onClickCallback={props.resetCounterValue}
                    disabledButtonOrNot={props.disabledResetButtonOrNot}
                />
            </div>
        </div>
    )
}

