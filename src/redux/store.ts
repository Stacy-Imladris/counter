import {combineReducers, createStore} from "redux";
import {loadValue} from "../utils/localstorage";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

const preloadedState = {
    counter: {
        startValue: loadValue('startValue') ? loadValue('startValue') : 0,
        endValue: loadValue('endValue') ? loadValue('endValue') : 5,
        counterValue: loadValue('startValue') ? loadValue('startValue') : 0,
        errorText: '',
    }
}

export const store = createStore(rootReducer, preloadedState)

export type AppRootState = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never