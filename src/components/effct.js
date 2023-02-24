import React ,{useEffect , useState} from 'react'

 const UseEffctEx = () => {
    const [count,setCount] = useState(0);
    useEffect ( () =>{
        console.log('hello Effect')
    },[count] )
  return (
    <div>
        <button onClick={()=> setCount(count + 1)} >+</button>
        <label>Effect = {count}</label>
    </div>
  )
}
export default UseEffctEx;