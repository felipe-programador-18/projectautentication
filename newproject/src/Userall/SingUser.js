import React, {useState, useContext} from 'react'
import { AuthContext } from '../manegecontext/auth'


const SingUserSin = () => {
    const auth = useContext(AuthContext)
    const [form, setform] =useState({
        email:'', password:''
    })
     
    const Onchange = fielt => evt =>{
        setform({
            ...form,
            [fielt]: evt.target.value
        })
    }
    if(auth.users !== null){
        return null
    }

    console.log('testing here place' ,auth.users)
    
    return(<>
    <div className='text-center '>
           <h1> Sing in Account:</h1>
           
            {auth.singUserInside.SingCreateState.error !== '' && 
            <p> {auth.singUserInside.SingCreateState.error} </p> }
           
           <input value={form.email} onChange={Onchange('email')} placeholder='Write your email:'  />
           <input value={form.password} onChange={Onchange('password')} />
           <button className='bg-dark' onClick={() => auth.singUserInside.singUserInside(form.email, form.password) } >Sing In</button>
           </div>
   </>)
}

export default SingUserSin