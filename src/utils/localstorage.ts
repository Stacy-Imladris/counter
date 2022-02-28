export const loadValue = (key: string) => {
    try {
        const resultAsString = localStorage.getItem(key)
        if (resultAsString === null) {
            return undefined
        }
        return JSON.parse(resultAsString)
    } catch (err) {
        return undefined
    }
}

export const saveState = (startValue: number, endValue: number) => {
    try {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('endValue', JSON.stringify(endValue))
    } catch {}
}