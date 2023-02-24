import {useState,useEffect} from 'react'

const UseFetching = (url) => {
    const[state,setstate] = useState([])
    useEffect(() =>{
        fetch(url).then(res =>res.json()).then(data =>setstate
            (data))
    })
  return [state]
    
}

export default UseFetching;