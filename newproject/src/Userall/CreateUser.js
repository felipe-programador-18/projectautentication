import React,{useContext, useState} from 'react'
import { AuthContext } from '../manegecontext/auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setform] = useState({email:'', password:''})
    
    const onChangeEvt = fielt => evt =>{
        setform({
            ...form,
            [fielt]: evt.target.value
        })
    }

    if(auth.users !== null){
        return null
    }
    
    return(<div className=''>
       <h1> Create new account!</h1>
        { auth.CreateUser.CreateUser.error !== '' && 
        <p className='bg-warning'> {auth.CreateUser.CreateUser.error} </p> }

       <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" onChange={onChangeEvt('email')}   value={form.email}  placeholder='"email@example.com"' />
     </div>
     </div>
     <div class="mb-3 row">
     <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
     <div class="col-sm-10">
      <input type="password" onChange={onChangeEvt('password')}  value={form.password}  placeholder='Your Password:'  id="inputPassword"   />
     </div>
     <button  className='bg-light' onClick={() => auth.CreateUser.CreateUser(form.email, form.password)} >Create Account</button>
      
      <button>Go by page Sing In!!</button>
</div>
      
        
    </div>)

}

export default CreateUser