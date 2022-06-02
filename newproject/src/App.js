import './App.css';
import React from 'react'
import { AuthProvider } from './manegecontext/auth';
import Comments from './Userall/Comments';
import CreateUser from './Userall/CreateUser';
import NewComents from './Userall/Newcomments';
import SingUserSin from './Userall/SingUser';
import UserInfo from './Userall/UserInfo';


function App() {
  return ( <AuthProvider>
     <div className='d-flex text-center' >
      <NewComents/>
      <CreateUser/>
      <Comments/>
      <SingUserSin/>
      <UserInfo/>
     </div>
    </AuthProvider>
  );
}

export default App;
