import React from 'react'
import "../Assets/Css/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='fotter container'>
      <h4>Developed by :Pasima pavan kumar</h4>
      <Link to={"https://github.com/pavankumar709"}><h4><i class="fa-brands fa-github"></i>Git hub</h4></Link>
     <Link to={"https://drive.google.com/file/d/1kV8bjf2IxaxQhc6zUgtve64MouajVAYZ/view?usp=drive_link"}><h4><i class="fa-solid fa-envelope"></i>pasima.pk@gmail.com</h4></Link> 
      <Link to={"https://pavankumar709.github.io/Weather.app/"}><h4><i class="fa-solid fa-cloud"></i>Weather.app</h4></Link>
      <h4><i class="fa-solid fa-phone"></i>8247075639</h4>
    </div>
    </>
  )
}
export default Footer;