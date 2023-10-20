import React, { useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState([
        "Kyleigh Porter",
        "Rhett Espinoza",
        "Lucille McCarthy",
        "Devin Ventura",
        "Zora Guerrero",
        "Bryce McCall",
        "Kai Stanton",
        "Zyair White",
        "Layla Wallace",
        "Chase Barber",
        "Cassidy Small",
        "Rudy Vasquez",
        "Rose Novak",
        "Bishop Raymond",
        "Hadlee Pratt",
        "Rowen Maynard",
        "Carolyn Villegas",
        "Clyde Atkins",
        "Mina Vaughn",
        "Remy Rubio"
    ])
    const [update, setUpdate] = useState([  ])
    const handleChange=(e)=>{
        setUpdate(e.target.value)
    }
  return (
    <>
    <input onChange={handleChange} type="text"  className='input' value={setUpdate}/>
    <span>{update}</span>
    <h1>{search}</h1>
    </>
  )
}
