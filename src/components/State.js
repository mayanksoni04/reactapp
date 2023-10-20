import { useState } from 'react'
import React from 'react'

export default function State() {
    const [initial, setInitial] = useState(10)
    let temp1;
    let temp2;
    let temp3;
    const handleClick=()=>{

        setInitial((previousValue)=>previousValue+5)
        setInitial((previousValue)=>previousValue-1)
        setInitial((previousValue)=>previousValue-3)
        // let temp1=temp+5
        // console.log(temp1);
        // let temp2=temp1-2
        // console.log(temp2);
        // let temp3=temp2-3
        // console.log(temp3);
    }
  return (
    <>
    <center>
    <h1>{initial}</h1>
    <h1>{temp1}</h1>
    <h1>{temp2}</h1>
    <h1>{temp3}</h1>
    <button onClick={handleClick}>Click</button>
    </center>
    </>
  )
}
