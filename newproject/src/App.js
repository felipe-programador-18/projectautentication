import './App.css';
import React from 'react'
import { AuthProvider } from './manegecontext/auth';
//import Comments from './Userall/Comments';
import CreateUser from './Userall/CreateUser';
//testing about singuser with router
import UserInfo from './Userall/UserInfo';
import SingUserSin from './Userall/SingUser';
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Comments from './Userall/Comments';
import Comment from './Userall/Comment';

//<NewComents/>
//<UserInfo/>


function App() {
  return ( <AuthProvider>
    <BrowserRouter>
     <div className='d-flex text-center' >
       <Routes>
         <Route  path={'/'} element={<SingUserSin/>}  />
         <Route  path= {'/CreateUser'} element={<CreateUser/>}  />
         <Route path={'/comment'} element={<Comment/>}  />
        </Routes>
     </div>
     </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
