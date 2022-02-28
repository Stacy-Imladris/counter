import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type InputUniversalPropsType = {
    type: string
    title: string
    defaultValue: number
    getValue: (value: number) => void
    style: boolean
}

export const InputUniversal = React.memo((props: InputUniversalPropsType) => {
    const [value, setValue] = useState<number>(props.defaultValue)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        props.getValue(+e.currentTarget.value)
    }

    return (
        <div>
            <TextField
                error={props.style}
                onChange={onChangeCallback}
                value={value}
                id="outlined-number"
                label={props.title}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    )
})