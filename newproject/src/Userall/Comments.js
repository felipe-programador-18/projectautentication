import React from 'react'
import Comment from './Comment'
import {useDataBase} from '../folderfirebase/database'

const Comments = () => {
  //data together works with data of database firebase
  const data = useDataBase('comments')
  
  if(!data){
     return <p>anything comments momment adding yet!!</p>
  }
  const ids = Object.keys(data)
  if(ids.length === 0){
      return <p>Loading....</p>
  }
   
   return ids.map(id =>{
      return  <Comment key={id} comment={data[id]} /> 
  })

}

export default Comments