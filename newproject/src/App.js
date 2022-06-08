import './App.css';
import React from 'react'
import { AuthProvider } from './manegecontext/auth';
//import Comments from './Userall/Comments';
import CreateUser from './Userall/CreateUser';
import NewComents from './Userall/Newcomments';
//testing about singuser with router
import UserInfo from './Userall/UserInfo';
import SingUserSin from './Userall/SingUser';
import {Routes, Route} from 'react-router-dom'

//<NewComents/>
//<UserInfo/>


function App() {
  return ( <AuthProvider>
     <div className='d-flex text-center' >
       <Routes>
         <Route  path={'/'} element={<SingUserSin/>}  />
          <Route  path= {'/CreateUser'} element={<CreateUser/>}  />
        </Routes>
     </div>
    </AuthProvider>
  );
}

export default App;
