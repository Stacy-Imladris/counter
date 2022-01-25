import React from "react";

type DisplayCounterPropsType = {
    counterValue: number
    error: string
}

export const DisplayCounter = (props: DisplayCounterPropsType) => {
    return (
        <div>
            {props.error === '' ? props.counterValue : props.error}
        </div>
    )
}