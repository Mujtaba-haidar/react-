import React,{useState} from 'react'

 const StateMore = () => {
    //useState for Count
    const [count,setCount] = useState(0);
    const handelIn =()=>{
        setCount(count + 1)
    }
    const handeldes =()=>{
        setCount(count - 1)
    }
    //useState for Text
    const [text,setText] = useState();
    const handInput = (e)=>{
     setText(e.target.value)
     console.log(text)
    }
  return (
    <div >
        <h1>
       <button onClick={handelIn}>+</button>
       <button onClick={handeldes}>-</button>
       <label>count is {count}</label>
       </h1>
       <input type="text" value={text} onChange={handInput} />
    </div>
  )
}
export default StateMore;