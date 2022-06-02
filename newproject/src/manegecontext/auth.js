import React, {useState, useEffect} from 'react'
import firebase from '../folderfirebase/firebase'

export const AuthContext = React.createContext()

//create useget to get all date autentication
const useGetUser = () => {
   const [users, setusers] = useState(null)
   useEffect(() => {
   firebase.auth().onAuthStateChanged(currentusers => {
    if(currentusers){
        console.log(currentusers)
        setusers(currentusers)
    }else{
        setusers(null)
    }
   })
   },[])
   return users
}

//part of create user
const UserCreateUser = () => {
    const [state, setstate] = useState({
       error:'',
       success: ''
    })
    
    const CreateUser = (email, password) => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(users => {
            if(users){
                setstate({
                    ...state,
                    success:'ok'
                })
            }
        })
        .catch(err =>{
            setstate({
                ...state,
                error: err.mensage
            })
        })
    }
  return [state, CreateUser]
}


//create part of Sing IN
const useSingUser = () => {
    const [state, setstate] = useState({
        error:'' ,
        success:''
    })
   
    const singUserInside = (email, password) =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(err => {
            if(err){
                setstate({
                  ...state,
                  success:'ok'
                })
            }
        })
        .catch(err => {
            setstate({
                 ...state,
                error: err.message
            })
        })  
    }
     return [state, singUserInside]
}

//create part sing out user out
const singout = () =>{
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log('Sing out Here!!')
    } )
}

//create functoin that works to manage all code

export const AuthProvider = ({children}) =>{
    const users = useGetUser()
    const[CreateUserState, CreateUser] = UserCreateUser()
    const[SingCreateState, singUserInside] = useSingUser()

    return ( <AuthContext.Provider value={{users,
     CreateUser:{ CreateUser, CreateUserState}
        ,
     singUserInside:{singUserInside, SingCreateState},
     singout
      }} >
        {children}
    </AuthContext.Provider>)
}