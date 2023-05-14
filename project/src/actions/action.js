import { add_to_card } from "../reducer/TransferReducer"
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
export const Transert = (data) => {
    return{ 
        type: add_to_card,
        data: data 
    }
}

// export const getData = state => state.id