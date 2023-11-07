import React from 'react'
import './profileScreen.css'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'
import { auth } from '../../firebase'
import PlanScreen from '../planScreen/PlanScreen'

const ProfileScreen = () => {
const user = useSelector(selectUser);

  return (
    <div className='profileScreen'> 
        <Navbar/>
        <div className='profileScreen__body'>
             <h1>Edit Profile</h1>
          <div className='profileScreen__info'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' 
            alt='avatar' />
             
             <div className='profileScreen__details'>
                <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
                <h3>Plans</h3>
                <PlanScreen/>
              <button className='profileScreen__signOut' onClick={()=> auth.signOut()}> 
              Sign Out</button>
            </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen
