import './App.css';
import React from 'react'
import { AuthProvider } from './manegecontext/auth';
//import Comments from './Userall/Comments';
//import CreateUser from './Userall/CreateUser';
import NewComents from './Userall/Newcomments';
//testing about singuser with router
import UserInfo from './Userall/UserInfo';
import SingUserSin from './Userall/SingUser';


function App() {
  return ( <AuthProvider>
     <div className='d-flex text-center' >
      <NewComents/>
    
      <SingUserSin/>
     
      <UserInfo/>
     </div>
    </AuthProvider>
  );
}

export default App;
