import React,{useContext,useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider,Fieldset ,Button,Box, TextInput,Group,PasswordInput , Stack}  from '@mantine/core';
import {useNavigate} from 'react-router-dom'
import {data,data1} from "../App"
import {Link} from 'react-router-dom'
export default function Signup() {
    const name1 = useContext(data)
    const pass1 = useContext(data1)
    const [visible, { toggle }] = useDisclosure(false);
    const [user, setUser] = useState([])
    const [pass, setPass] = useState([])
    let navi =useNavigate()
    const handleUser=(e)=>{
        setUser(e.target.value)
        console.log(e.target.value);
    }
    const handlePass=(e)=>{
        setPass(e.target.value)
        console.log(e.target.value);
    }
    
    const handleClick=()=>{
         console.log(user)
         console.log(pass)
        if (user==name1&&pass==pass1) {
            return navi("/Home")
        }
        else{
            alert("Wrong Id or Pass")
        }
    }
  return (
    <>
        <div>
            <MantineProvider>
                
                <center>
                    <Fieldset legend="Personal information">
                        <TextInput onChange={handleUser} label="Your User name" placeholder="User Name"  />
                        
                        <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input onClick={handlePass} type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
                    </Fieldset>
                   <button onClick={handleClick}>Submit</button>
                   
                </center>
                
            </MantineProvider>
        </div>
    </>
  )
}