import React,{useState, useEffect} from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
 
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = ()=> {
        if (window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
    return ()=> window.removeEventListener('scroll', transitionNavBar);
    },[]);


  return (
    <div className={`nav ${show && `nav__black`}`}>
        <div className='nav__contents'>
      <img src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png'
       alt='Netflix Logo' className='nav__logo' onClick={()=> navigate('/')}/>
    
    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' 
    alt='Netflix Avatar' className='nav__avatar' onClick={()=> navigate('/profile')} />
    </div>
    
    </div>
  )
}

export default Navbar
