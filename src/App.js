import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './components/homescreen/HomeScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginScreen from './components/login/LoginScreen'
import { auth } from './firebase'
import {useDispatch, useSelector}  from 'react-redux'
import {login, logout, selectUser } from './features/counter/userSlice'
import ProfileScreen from './components/profilescreen/ProfileScreen'



function App() {

  const user = useSelector(selectUser);
  
     const dispatch = useDispatch();
  
  useEffect(()=> {
     const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
         dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
         }))
      } else {
        dispatch(logout());
      }
     })
     return unsubcribe;
  },[dispatch]);
  
  
    return (

 <div className='App'>
      
      <Router>
     
            {!user ? (
                <LoginScreen/>
            ): (
              <Routes>
                <Route path='/profile' element={<ProfileScreen/>}/>
              <Route exact path='/' element={<HomeScreen/>} />
              
              </Routes>
              
            )}
            
           
          </Router>    
         
    </div>
  );
  
}
  
export default App;
 