import { DECREMENT, INCREMENT, RESET } from "../contants/counterContant"

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
export const DecrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
export const reset = () => {
    return {
        type: RESET,
    }
}