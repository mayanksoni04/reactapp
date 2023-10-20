import React, { useState } from 'react'
import Navbar from './Navbar'
import { Textarea , Button, Center } from '@mantine/core'
export default function Todolist() {
    const [text, settext] = useState("")
    const [toggle, setToggle] = useState(false)
    const [newtext, setnewtext] = useState([])
    const [edit, setedit] = useState([])
    const [edit1,setedit1]=useState(false)
    const handleChange =(e)=>{
        settext(e.target.value) 
    }
    const handleClick=()=>{
        
        if (text.length>0) {
          setnewtext([...newtext,{text}]) 
        console.log(newtext)
       settext(" ")
    }
    else{
      alert("add todo first")
    }
        }
    const handleDelete=(i)=>{
        let copytext=[...newtext]
        copytext.splice(i,1)
        setnewtext(copytext)
    }
   const handleToggle=()=>{
    setToggle(!toggle)
  }
    const handleEdit=()=>{
      console.log({newtext})
      setedit(newtext)
      console.log(edit)
      setedit1(!true)
    }
  return (
    <>
    <Navbar/>
    <center>
  <div className='to'>
    <div className='to1'> 
    <h1 className='to2'> To-Do List</h1>
    <div className='to3'>                                                                                               
      <Textarea className="to4" onChange={handleChange} type="text" placeholder='Add Your To-Do Here' />
      <Button  variant="filled" className="button1" onClick={handleClick}>Add</Button>  
                                                                                                                                                                   
    </div>
    </div>
    <div className='to5'>
    <div  className='to6'>
   { newtext.map((i,t)=>{
    return <div> 
      {edit?<li style={{textDecoration: toggle? 'line-through':'none'}} key={t}>  <input onChange={handleToggle} type="checkbox" /> {i.text} <button onClick={handleDelete}>delete</button> <button onChan={handleEdit} >edit</button> </li>:<input type="text" />}
    </div>
})}
    </div>
    </div>
    </div>
    </center>
</>
)
}