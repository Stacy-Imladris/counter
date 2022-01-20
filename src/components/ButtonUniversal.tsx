import React from "react";
import {Button} from "@mui/material";

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
            <Button variant="contained" onClick={onClickCallback} disabled={props.disabledButtonOrNot}>
                {props.name}
            </Button>
        </div>
    )
}