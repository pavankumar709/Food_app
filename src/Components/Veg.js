import React, { useState } from 'react';
import Nonveg from './Nonveg';
import "../Assets/Css/Veg.css"
import Carousel from 'react-bootstrap/Carousel';
import co1 from "../Assets/Images/png/veg1.jpg"
import co2 from "../Assets/Images/png/veg2.jpg"
import co3 from "../Assets/Images/png/veg3.jpg"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {DotLoader} from "react-spinners"

function Veg(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const [data , setdata] = useState([])
  const [loading , setloading] = useState(true)

  useEffect(()=>{
    fetch("https://6436809c3e4d2b4a12d3feef.mockapi.io/veg")
    .then((result) => result.json())
    .then(res => {setdata(res);
      setloading(false)})
    .catch((error)=> console.log(error))
  }, [])
  let {setvegCart , vegdetails} = props;

  console.log(props)
  
  return (
    <>
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
        <div></div>
        <div className='filters container d-flex'>
        <h2>24 ITEMS</h2>
        <div className='filter_rate'>
         
          <Link to={"/"}>Home</Link>
          <Link to={"/Nonveg"}>Nonveg</Link>
        </div>
      </div>
      <hr className='container'></hr>
      <div className='container d-flex row-4 col 3 main-api'>
        {loading ? 
        (
          <DotLoader color="#36d7b7" />):(

          
            data.map((item ,id)=>{
              return(
                <div className='items'>
                  <img src={item.image} alt='image is not found' key={id} />
                  <h6>{item.recepies_name}</h6>
                  <span className='span'><i class="fa-regular fa-star"></i>  {item.rating}</span>
                  <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.cost}</span><br></br>
                  <button type='submit' className='button' onClick={() => {setvegCart([...vegdetails,item]); window.alert("Successfully Added To Cart")}}>Add To Cart</button>
                </div>
              )
            })
  )}
  
        </div>
      
        
     
      
    </>
  );
}

export default Veg;
