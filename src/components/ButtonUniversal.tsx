import React from "react";
import {Button} from "@mui/material";

type ButtonUniversalPropsType = {
    name: string
    onClickCallback: () => void
    isButtonDisabled: boolean
}

export const ButtonUniversal = (props: ButtonUniversalPropsType) => {
    const onClickCallback = () => {
        props.onClickCallback()
    }

    return (
        <div>
            <Button variant="contained" onClick={onClickCallback} disabled={props.isButtonDisabled} color={'secondary'}>
                {props.name}
            </Button>
        </div>
    )
}