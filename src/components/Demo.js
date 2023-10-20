import React,{useState} from 'react'

export default function Demo() {
   const [toggle, setToggle] = useState(false)
    const handleClick=()=>{
       setToggle(!toggle)
    }
  return (
    <div>
        <input onClick={handleClick} type="checkbox" label="hello" />
        <button >onClick</button>
       <h1 style={{  color: toggle?"red":"black"}}> hello</h1>
    </div>
  )
}
