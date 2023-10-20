
import React,{useState} from 'react'
import Navbar from './Navbar'

export default function Form2() {
    const [name, setname] = useState("")
    const [add, setadd] = useState("")
    const [college, setcollege] = useState("")
    const [select, setselect] = useState("")
    const [first, setfirst] = useState([])
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
  const handleSelect=(e)=>{
  setselect(e.target.value)
  
  setfirst((oldarr) =>{
      return [...oldarr , e.target.value]
  })
  }

   const handleSubmitClick=()=>{
    alert("Done")
   }

   const deleteElement = (index) =>{
      setfirst((oldarr) =>{
        return  oldarr.filter((elem , ind) =>{
              if (index !== ind){
                console.log(elem)
                 return elem
              }
         })
      })
   }
  return (
    <>
    <Navbar/>
     <div className='divparent'>
        <h1>Form</h1>
        <div className='inputp'>
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
        <div>   
</div>
<div className='radio'>
<label htmlFor="">Branch</label>
<input type="radio" id="html" name="fav_language" value="CSE"/ >
  <label for="html">CSE</label>
<input type="radio" id="css" name="fav_language" value="IT"/>
  <label for="css">IT</label>
<input type="radio" id="javascript" name="fav_language" value="AD"/>
  <label for="javascript">AD</label>
</div>
<div>
    <label htmlFor="">Tech Stack: </label>
<select name="techstack" onChange={handleSelect}>
  <option value="">Select</option>
  <option value="C++">C++</option>
  <option value="Python">Python</option>
  <option value="Java">Java</option>
  <option value="JavaScript">JavaScript</option>                
</select>
</div>
{
   first.map((i,t)=>{
        return (<h1>{i} <button onClick = {() => deleteElement(t)}>x</button></h1>)   
        
        
    })
}
<button onClick={handleSubmitClick}>Submit</button>
</div>
</div> 
    </>

)}