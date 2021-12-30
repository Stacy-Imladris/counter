import React from "react";

type ButtonUniversalPropsType = {
    name: string
    changeCounterValue: () => void
    disabledButtonOrNot: boolean
}

export const ButtonUniversal = (props: ButtonUniversalPropsType) => {

    return (
        <div>
            <button
                disabled={props.disabledButtonOrNot}
                onClick={props.changeCounterValue}>
                {props.name}
            </button>
        </div>
    )
}