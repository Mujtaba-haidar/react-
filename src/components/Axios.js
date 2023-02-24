import React,{useState,useEffect} from 'react'
import axios from 'axios';
const UseAxios = () => {
    const [state , setstae] = useState([])

const UseAxios = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setstae(res.data)
}
useEffect (()=>{
    UseAxios();
}, [])
  return (
    <div>
    {state.map((item) =>{
       // return(item.body)
    })}
    </div>
  )
}

export default UseAxios;