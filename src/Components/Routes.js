import { Route,Routes } from "react-router-dom";
import Header from "./Header";
import React, { useEffect, useState } from 'react'
import Home from "./Home";
import Search from "./Search";
import Offers from "./Offers";
import Help from "./Help";
import Login from "./Login";
import Cart from "./Cart";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Footer from "./Footer";

export default function Routers() {
  const [cart , setCart] = useState([])

  const [vegcart , setvegcart] = useState([])

  const [noncart , setnoncart] = useState([])


  return (
    
    <>
    <Header/>
    <Routes>
     <Route path="/" element={<Home details={cart} setCart={setCart}/>}></Route>
     <Route path="/Search" element={<Search details={cart} setCart={setCart} vegdetails={vegcart} setvegCart={setvegcart} />}></Route>
     <Route path="/Offers" element={<Offers/>}></Route>
     <Route path="/Help" element={<Help/>}></Route>
     <Route path="/Login" element={<Login/>}></Route>
     <Route path="/Cart" element={<Cart details={cart} setCart={setCart} vegdetails={vegcart} setvegCart={setvegcart} nondetails={noncart} setnoncart={setnoncart} />}></Route>
     <Route path="/veg" element={<Veg vegdetails={vegcart} setvegCart={setvegcart} />}></Route>
     <Route path="/Nonveg" element={<Nonveg nondetails={noncart} setnoncart={setnoncart}/>}></Route>
    </Routes>
    {/* <br></br> */}
    {/* <br></br> */}
    <Footer/>
    </>
  )
}
