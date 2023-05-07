// REDUX File

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decremrnt  } from '../actions/action'

const Countervalue = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
    <div>
        <h1>counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decremrnt())}>-</button>
        {isLogged ? <h3>Valueable infromation shouldn't see</h3> : ''}
        
    </div>
  )
}

export default Countervalue