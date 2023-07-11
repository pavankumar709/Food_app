import React from 'react'
import "../Assets/Css/Header.css"
import Logo from "../Assets/Images/png/logo-black.png"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useEffect,useState} from 'react'


function Header() {
  
  const [currentloc, setcurrentloc] = useState({})

  useEffect (()=>{
    getlocation()
  },[])

  const getlocation = async ()=>{
    const location = await axios.get("https://ipapi.co/json");
    setcurrentloc(location.data)
    
  }
  
  
  return (
    
    <>
    <div className='container'>
      <div className='main'>
        <div className='header-logo'>
          <Link to={"/"}> <img src={Logo} alt='Logo not found' className='logo'/></Link>
         <span>{currentloc.region},{currentloc.city}</span>
                  
            
        </div>
               
                  <div className='links'>
   
                     <div>
                     <i class="fa-solid fa-magnifying-glass"></i>
                     <Link to={"/Search"}>Search</Link>
                     </div>
                     <div>
                     <i class="fa-solid fa-face-grin-tears"></i>
                     <Link to={"/Offers"}>Offers</Link>
                     </div>

                     <div> 
                     <i class="fa-solid fa-life-ring"></i>
                     <Link to={"/Help"}>Help</Link>
                     </div>

                     <div>
                     <i class="fa-solid fa-right-to-bracket"></i>
                     <Link to={"/Login"}>Login</Link>
                     </div>

                     <div>
                     <i class="fa-solid fa-cart-shopping"></i>
                     <Link to={"/Cart"}>Cart</Link>
                     </div>
                  </div> 
      </div>
    </div>
    </>
  )
}
export default Header;
