import React from "react";

type DisplayCounterPropsType = {
    counterValue: number
}

export const DisplayCounter = (props: DisplayCounterPropsType) => {
    return (
        <div>
            {props.counterValue}
        </div>
    )
}