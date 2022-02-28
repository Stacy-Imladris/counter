import React from "react";
import {useSelector} from "react-redux";
import {AppRootState} from "../../../redux/store";

export const DisplayCounter = React.memo(() => {

    const errorText = useSelector<AppRootState, string>(state => state.counter.errorText)
    const counterValue = useSelector<AppRootState, number>(state => state.counter.counterValue)

    return (
        <div>
            {errorText === '' ? counterValue : errorText}
        </div>
    )
})