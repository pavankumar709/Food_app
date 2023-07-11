import React, { useEffect, useState } from 'react'

import "../Assets/Css/Search.css"
import {DotLoader} from "react-spinners"
import { Link } from 'react-router-dom'


function Search(props) {

  const [data , setdata] = useState([])
  const [veg , setveg] = useState([])
  const [apidata , setapidata] = useState(data)
  const [vegapi , setvegapi] = useState(veg)
  const [loder , setloder] =useState(true)

  useEffect(()=>{
    fetch("https://643aa76990cd4ba563fe5886.mockapi.io/both")
    .then((responce) => responce.json())
    .then(res => {setdata(res)
      setapidata(res);
    setloder(false)})
    .catch((error) => console.log(error))
    
  },[])

  useEffect(()=>{
    fetch("https://6436809c3e4d2b4a12d3feef.mockapi.io/veg")
    .then((result) => result.json())
    .then(res => {setdata(res)
      setvegapi(res);
      setloder(false)})
    .catch((error)=> console.log(error))
  }, [])

  const Filter = (event) =>{
    setapidata(data.filter(item => item.recepies_name.toLowerCase().includes(event.target.value)))
    setvegapi(veg.filter(item => item.recepies_name.toLowerCase().includes(event.target.value)))
  }

  const { details , setCart, vegdetails, setvegCart} = props;

  return (
    <>
        <div className='container'>
                    <div className='input_fileld'> 
                    <input type='text'  onChange={Filter}/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <Link to={"/"} className='link'>Home</Link>
                
                <div className='data'>
                  {
                    loder ? (
                      <DotLoader color="#36d7b7" />
                    ) : (
                      apidata.map((item) => {
                        return(
                          <>
                            <div className='items'>
                            <img src={item.recepies_image} alt='image is not found'  loading='lazy'/>
                            <h6>{item.recepies_name}</h6>
                            <h6>TYPE: {item.recepies_type} </h6>
                            <span className='span'><i class="fa-regular fa-star"></i>  {item.recepies_rating}</span>
                            <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.recepies_orgin}</span><br></br>
                            <button type='submit' className='button' onClick={() => {setCart([...details,item]);window.alert("Successfully Added To Cart")}}>Add To Cart</button>
                            </div>
                          </>
                        )
                        
                      })
                    )
                  }
                </div>
                <div className='data'>
                  {
                    
                      vegapi.map((item) => {
                        return(
                          <>
                            <div className='items'>
                            <img src={item.image} alt='image is not found'  />
                            <h6>{item.recepies_name}</h6>
                            <span className='span'><i class="fa-regular fa-star"></i>  {item.rating}</span>
                            <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.cost}</span><br></br>
                            <button type='submit' className='button' onClick={() => {setvegCart([...vegdetails, item]);window.alert("Successfully Added To Cart")}}>Add to Cart</button>
                          </div>
                          </>
                        )
                        
                      })
                  
                  }
                </div>
        </div>
        
    </>
  )
}

export default Search;