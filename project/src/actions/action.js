//REDUX File that represent our all actions

export const increment = (number) => {
    return{
        type: 'INCREMENT',
        payload: number
    }
}
export const decremrnt = () => {
    return{
        type: 'DECREMENT'
    }
}
export const Transert = () => {
    return{
        type: 'Transfer' 
    }
}