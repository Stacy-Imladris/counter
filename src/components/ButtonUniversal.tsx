import React from "react";

type ButtonUniversalPropsType = {
    name: string
    onClickCallback: () => void
    disabledButtonOrNot: boolean
}

export const ButtonUniversal = (props: ButtonUniversalPropsType) => {

    const onClickCallback = () => {
        props.onClickCallback()
    }

    return (
        <div>
            <button
                disabled={props.disabledButtonOrNot}
                onClick={onClickCallback}>
                {props.name}
            </button>
        </div>
    )
}