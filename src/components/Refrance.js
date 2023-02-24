import React ,{useRef} from 'react'

 const Refrance = () => {
    const valueInp = useRef(null);
    const focus = () =>{
        valueInp.current.focus();
        console.log(valueInp.current.value)
    }
  return (
    <div>
        <input type="text" ref={valueInp} />
        <button onClick={focus}>focus</button>
    </div>
  )
}
export default Refrance;