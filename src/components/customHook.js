import React from 'react'
import UseFetching from '../customHook/fetching';
const CustomHook = () => {
    const [state] = UseFetching('https://jsonplaceholder.typicode.com/todos/')
  return (
    <div>
      {state.map((item)=>{
        return(<h1>{item.title}</h1>)
      })}
    </div>
  )
}

export default CustomHook;