import React, { useEffect, useState } from 'react'

export default function Apicalling() {
    const [list, setList] = useState([])
    const [input, setInput] = useState({})
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response => response.json())
     .then(json => setList(json))
    })
      const handleChange=(e)=>{
        console.log(e.target.value)
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
        .then(response => response.json())
        .then(json => setInput(json));
        console.log(input.title);
}    
  return (
    <>
     <select name="" id="" onChange={handleChange}>
    {
        list.map((i,k)=>{
            return <option key={k} value={i.id}>{i.id}</option>
        })
    }
    </select>
    <h1>{input.userId}</h1>
   <h1>{input.title}</h1>
   <h2>{input.body}</h2>
   
    </>
  )
}
