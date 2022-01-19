import React, {ChangeEvent, useState} from 'react';

type InputUniversalPropsType = {
    type: string
    title: string
    defaultValue: number
    getValue: (value: number) => void
}

export const InputUniversal = (props: InputUniversalPropsType) => {
    const [value, setValue] = useState<number>(props.defaultValue)

    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
        props.getValue(Number(e.currentTarget.value))
    }

    return (
        <div>
            <span>{props.title}</span>
            <input value={value} type={'number'} onChange={onChangeCallback}/>
        </div>
    );
};