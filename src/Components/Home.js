import React, { useEffect } from 'react'
import co1 from "../Assets/Images/png/ex-1.jpg"
import co2 from "../Assets/Images/png/ex-2.jpg"
import co3 from "../Assets/Images/png/ex-3.jpg"
import "../Assets/Css/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { useState} from "react";
import {DotLoader} from "react-spinners"
import { Link } from 'react-router-dom'

  
function Home(props) {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let {setCart, details} = props;
  
  

  const [loading , setloading] = useState(true)

  const [data , setdata] = useState([])

  useEffect(()=>{
    fetch("https://643aa76990cd4ba563fe5886.mockapi.io/both")
    .then((responce) => responce.json())
    .then(res => {setdata(res);
    setloading(false)})
    .catch((error) => console.log(error))
    
  },[])
 
  const [alert , setalert] = useState("succesfully add to cart")
  

  return (
    <div className='container'>
    
      <div className='carousel container'>
      
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='Carousel'>
        <img
          className="d-block w-100"
          src={co1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Good food == Good mood</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
        <img
          className="d-block w-100"
          src={co2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fresh For Your Enjoyment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
        <img
          className="d-block w-100"
          src={co3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Count The Memories, Not The Calories</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='filters container d-flex'>
        <h2>24 ITEMS</h2>
        <div className='filter_rate'>
          
          <Link to={"/Veg"}>Veg</Link>
          <Link to={"/Nonveg"}>Nonveg</Link>
        </div>
      </div>
      <hr className='container'></hr>
        <div className='container d-flex row-4 col 3 main-api'>
        {loading ? (
          <DotLoader color="#36d7b7" />
        ) :
        (
            data.map((item ,id)=>{
              return(
                <div className='items'>
                  <img src={item.recepies_image} alt='image is not found' key={id} loading='lazy'/>
                  <h6>{item.recepies_name}</h6>
                  <h6>TYPE: {item.recepies_type} </h6>
                  <span className='span'><i class="fa-regular fa-star"></i>  {item.recepies_rating}</span>
                  <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.recepies_orgin}</span><br></br>
                <button type='submit' className='button' onClick={() => {setCart([...details,item]); window.alert("Successfully Added To Cart")}}>Add To cart</button>
                </div>
              )
            })
          )}
          
        </div>
        
    </div>
  )
}

export default Home;