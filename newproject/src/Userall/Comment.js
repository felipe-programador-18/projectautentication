import React, {useContext} from 'react'
import Time from './Time'
import { AuthContext } from '../manegecontext/auth'
// remember works below dates firebase content and createAt together Timestamp
const Comment = ({comment}) => {
   const auth = useContext(AuthContext)
   console.log(auth)
   return (<div className=''>
      <div className='test'>
       {comment.content} by : {comment.users.name} in: <Time TIMESTAMP={comment.createAT} />
       </div>
    </div>) 

}


export default Comment