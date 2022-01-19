import React from "react";

type DisplayCounterPropsType = {
    counterValue: number
    error: string
}

export const DisplayCounter = (props: DisplayCounterPropsType) => {
    return (
        <div>
            {props.error === 'Incorrect value!' ? 'Incorrect value!' : props.error === '' ? props.counterValue : 'Enter values and press \'set\''}
        </div>
    )
}