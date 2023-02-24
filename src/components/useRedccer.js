import React,{useReducer} from 'react'
const initailValue ={
    count:0
}
const reducertext = (state , action) =>{
    switch(action.type){
        case 'increment':
            return{count:state.count + 1}
        case 'decrement':
            return{count:state.count - 1}
        case 'reset':
            return{count:0}
        default:
            return{state}
    }
}
 const UseRedccerEx = () => {
    const [state , dispatch] = useReducer(reducertext,initailValue)
  return (
    <div >
        
        Value is {state.count}
        <button onClick={() => dispatch({type:'increment'})}>+</button>
        <button onClick={() => dispatch({type:'decrement'})}>-</button>
        <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}
export default UseRedccerEx ;