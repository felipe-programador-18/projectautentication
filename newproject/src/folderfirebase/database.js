import {useState, useEffect} from 'react'
import firebase from './firebase'

export const useDataBase = endpoints => {
    const [data, setdata] = useState({})
    useEffect(() => {
    const ref = firebase.database().ref(endpoints)
     ref.on('value', snapshoot =>{  
      setdata(snapshoot.val())
    })
    return () => {
     ref.off()   
    }
  }, [endpoints])
   return data    
}

export const useDataBasePush = endpoints => {
    const [status, setstatus] = useState('')
    const save = data => {
     const ref = firebase.database().ref(endpoints)
     ref.push(data, err => {
        if(err){ 
           setstatus('Error in aplication')
       }else{
           setstatus('Success in aplication')
       }
     })
    }
    return [status, save]
}
