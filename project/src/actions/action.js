//REDUX File

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