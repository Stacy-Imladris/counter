import React from "react";
import {ButtonUniversal} from "./ButtonUniversal";
import s from "./Counter.module.css"
import {DisplayCounter} from "./DisplayCounter";

type CounterPropsType = {
    counterValue: number
    resetCounterValue: () => void
    incrementCounterValue: () => void
    disabledResetButtonOrNot: boolean
    disabledIncButtonOrNot: boolean
    styleForCounterValue: string
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.main}>
            <div className={props.styleForCounterValue}>
                <DisplayCounter counterValue={props.counterValue}/>
            </div>
            <div className={s.container}>
                <ButtonUniversal
                    name={'inc'}
                    changeCounterValue={props.incrementCounterValue}
                    disabledButtonOrNot={props.disabledIncButtonOrNot}
                />
                <ButtonUniversal
                    name={'reset'}
                    changeCounterValue={props.resetCounterValue}
                    disabledButtonOrNot={props.disabledResetButtonOrNot}
                />
            </div>
        </div>
    )
}

