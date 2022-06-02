import React, {useState,useContext} from 'react'
import { AuthContext } from '../manegecontext/auth'

const FormDisplay = ({displayName, users}) => {
    const [ newdisplayName , setdisplayName] = useState(displayName)

    const Onchange = evt => {
        setdisplayName(evt.target.value)
    }
    // to save new users
    const save = () => {
        if(newdisplayName !== ''){
            users.updateProfile({displayName: newdisplayName})
        }
    }
    return(<>
        <input type='text' value={newdisplayName} onChange={Onchange}  />
        <button onClick={save} >Save New Name</button>
    </>)
}

const UserInfo = () =>{
const auth = useContext(AuthContext)

if(auth.users === null){
    return null
}

const {displayName} = auth.users
const [alternativeDisplayName] = auth.users.email.split('@')
const dn = displayName || alternativeDisplayName


  return(<>
        <h1> Hi {dn}</h1>
        <FormDisplay displayName={dn} users={auth.users} />
         <button onClick={auth.singout} >Sing out </button>
  </>)
}

export default UserInfo