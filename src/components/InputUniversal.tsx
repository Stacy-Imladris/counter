import React, {ChangeEvent, useState} from 'react';
import s from './InputUniversal.module.css'

type InputUniversalPropsType = {
    type: string
    title: string
    defaultValue: number
    getValue: (value: number) => void
    style: boolean
}

export const InputUniversal = (props: InputUniversalPropsType) => {
    const [value, setValue] = useState<number>(props.defaultValue)

    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
        props.getValue(Number(e.currentTarget.value))
    }
    const inputStyle = `${s.standart} ${props.style ? s.error : ''}`

    return (
        <div>
            <span>{props.title}</span>
            <input value={value} type={props.type} onChange={onChangeCallback} className={inputStyle}/>
        </div>
    );
};