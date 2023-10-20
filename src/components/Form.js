import React, { useState } from 'react'

export default function Form() {

    const [name, setname] = useState("")
    const [add, setadd] = useState("")
    const [college, setcollege] = useState("")
   const handleName=(e)=>{
    setname(e.target.value)
   }
   const handleAdd=(e)=>{
    setadd(e.target.value)
   }
   const handleClg=(e)=>{
    setcollege(e.target.value)
   }
   const handleClick=()=>{
    if(name==""||add==""||college=="")
    alert("input area is empty")
else{
    
    alert((name +" " + add +" "+ college))
}
   }
  return (
    <>
    <div className='divparent'>
        <h1>Form</h1>
        <div className='div1'>
            <label htmlFor="Name" >Name:</label>
            <input type="text" onChange={handleName} placeholder='enter your name' />
        </div>
        <div className='div2'>
            <label htmlFor="Name">Address:</label>
            <input type="text" onChange={handleAdd} placeholder='enter your name' />
        </div>
        <div className='div3'>
            <label htmlFor="Name">College Name:</label>
            <input type="text" onChange={handleClg} placeholder='enter your name' />
        </div> 
        <button onClick={handleClick}>Submit</button>     
    </div>
    </>
  )
}
