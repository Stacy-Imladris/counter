import {InferActionTypes} from "./store";

type ActionTypes = InferActionTypes<typeof actions>

export const initialState = {
    startValue: 0,
    endValue: 5,
    counterValue: 0,
    errorText: ''
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){
        case 'INC_COUNTER_VALUE':
            return {...state, counterValue: state.counterValue + 1}
        case 'RESET_COUNTER_VALUE':
            return {...state, counterValue: action.payload.value}
        case 'CHANGE_START_VALUE':
            return {...state, startValue: action.payload.value}
        case 'CHANGE_END_VALUE':
            return {...state, endValue: action.payload.value}
        case 'CHANGE_ERROR_TEXT':
            return {...state, errorText: action.payload.text}
        default:
            return state
    }
}

export const actions = {
    incCounterValue: () => ({type: 'INC_COUNTER_VALUE'} as const),
    resetCounterValue: (value: number) => ({type: 'RESET_COUNTER_VALUE', payload: {value}} as const),
    changeStartValue: (value: number) => ({type: 'CHANGE_START_VALUE', payload: {value}} as const),
    changeEndValue: (value: number) => ({type: 'CHANGE_END_VALUE', payload: {value}} as const),
    changeErrorText: (text: string) => ({type: 'CHANGE_ERROR_TEXT', payload: {text}} as const),
}