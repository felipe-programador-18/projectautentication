import React,{useState,useContext} from 'react'
import {AuthContext} from '../manegecontext/auth'
import firebase from '../folderfirebase/firebase'
import {useDataBasePush } from '../folderfirebase/database'

const NewComents = () => {
  const [,save] = useDataBasePush ('comments')
  const [ comment, setcomment] = useState('') 
  const auth = useContext(AuthContext) 
  if(auth.users === null){
      return null
  }  
  console.log(auth.users)

  // now together works api displayName of firebase api
  const {displayName} = auth.users
  const [alternativeDisplayName] = auth.users.email.split('@')
  
  const CreateComme = () =>{
      if(comment !==''){
          save({
          content: comment,
          createAT: firebase.database.ServerValue.TIMESTAMP,
          users:{
           id: auth.users.uid,
           name: displayName || alternativeDisplayName
           } 
          })
          setcomment('')
      }
  } 

  return(<>
  <div>
           <textarea    value={comment}  onChange={evt => setcomment(evt.target.value)} /> <br/>
           <button  className='bg-primary' onClick={CreateComme} >Toggle</button>
           </div>
  </>)

}

export default NewComents