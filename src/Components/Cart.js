import React, { useState, useEffect } from 'react'
import "../Assets/Css/Cart.css"


function Cart(props) {
  let {setCart,details,setvegCart,vegdetails,nondetails,setnoncart} = props

  const [card_number , setcard_number] = useState({})

  const [vegcard , setvegcard_numder] = useState({})

  const [noncard , setnoncard_numder] = useState({})

  useEffect(()=>{
    let x = {}
    details.map((item)=>{
      x[item.id] = 1
    })
    setcard_number(x)
  },[details])

  useEffect(()=>{
    let x = {}
    vegdetails.map((item)=>{
      x[item.id] = 1
    })
    setvegcard_numder(x)
  },[vegdetails])

  useEffect(() => {
    let x = {}
    nondetails.map((item) => {x[item.id]= 1})
    setnoncard_numder(x)
  },[nondetails])


  
  

  const cartincrease = (id) => {
    
    let a = card_number[id]
    if(a >= 3){
      
      alert("out of stock")

      return
     }
      let x = {...card_number}
     x[id] = Number(x[id] ? x[id]:0) + 1
    setcard_number(x)
  }
  
  const cartdecrease = (id) => {
   
    let a = card_number[id]
    if(a == 1 ){
      
      alert("Removed from cart")

      let dup = [...details]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setCart(dup1)
      
      return
     }


    let x = {...card_number}
     x[id] = Number(x[id] ? x[id]:0) - 1
     
    setcard_number(x)

    

  }
  console.log(details);
  const vegcartdecrease = (id) => {
    let a = vegcard[id]
    if(a == 1){
      alert("removed from cart")
      let dup = [...vegdetails]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setvegCart(dup1)
      return
    }
    let x = {...vegcard}
    x[id] = Number(x[id] ? x[id]:0) -1

    setvegcard_numder(x)
  }

  const veginecrease = (id) => {
   
    let a = vegcard[id]
    if(a >= 3 ){
      alert("out of stock")
      return
    }
    let z = {...vegcard}
   z[id] = Number(z[id]?z[id]:0) + 1
   setvegcard_numder(z)
  }

  const nondecrease = (id) => {
  
    let a = noncard[id]
    if(a == 1 ){
      
      alert("Removed from cart")

      let dup = [...nondetails]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setnoncart(dup1)
      
      return
     }
  
    let x = {...noncard}

    x[id] = Number(x[id] ? x[id] : 0) - 1
    setnoncard_numder(x)
  }


  const nonincrease = (id) => {

    let a = noncard[id]
    if(a >= 3 ){
      alert("out of stock")
      return
    }

    let x = {...noncard}

    x[id] = Number(x[id] ? x[id]:0) +1
    setnoncard_numder(x)
  }
  
  
  const payment = (id) => {
    let a = card_number[id]
    if(a  > 0 ){
      
      alert("Shotly You's Food Will be There")

      let dup = [...details]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setCart(dup1)
      
      return
     }
  }
  const vegpayment = (id) => {
    let a = vegcard[id]
    if(a  > 0 ){
      
      alert("Shotly You's Food Will be There")

      let dup = [...vegdetails]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setvegCart(dup1)
      
      return
     }
  }
  const nonpayment = (id) => {
    let a = noncard[id]
    if(a  > 0 ){
      
      alert("Shotly You's Food Will be There")

      let dup = [...nondetails]
      let dup1 = dup.filter((item)=> item.id != id) 
      console.log(dup1)
     setnoncart(dup1)
      
      return
     }
  }



  return(

    <>
      <div className='container'>
        

        <div className='container main1'>
          
          {
            
           details && details?.filter((item)=> card_number[item.id] > 0 ).map((item,id) => {

              return (
                <>
                  <div className='items_cart'>
                  <img src={item.recepies_image} alt='image is not found' key={id} loading='lazy'/>
                  <h6>{item.recepies_name}</h6>
                  <span className='span'><i class="fa-regular fa-star"></i>  {item.recepies_rating}</span>
                  <span><i class="fa-solid fa-indian-rupee-sign"></i>{card_number[item.id] ? (card_number[item.id]*item.recepies_orgin) : 0}</span><br></br>
                  <button onClick={() => cartdecrease(item.id)} className='button'>-</button>{card_number[item.id] ? card_number[item.id]:0}<button onClick={() => cartincrease(item.id)} className='button'>+</button><br></br>
                  <input type='button' value={"pay now"} className='pay_know' onClick={() => {payment(item.id)}}/>
                  </div>
                </>
              )
            })
          }
          {
            vegdetails && vegdetails?.filter((item) => vegcard[item.id] > 0 ).map((item,id) => {


              return(
                <>
                 <div className='items_cart'>
                  <img src={item.image} alt='image is not found' key={id} />
                  <h6>{item.recepies_name}</h6>
                  <span className='span'><i class="fa-regular fa-star"></i>  {item.rating}</span>
                  <span><i class="fa-solid fa-indian-rupee-sign"></i>{vegcard[item.id]*item.cost}</span><br></br>
                  <button onClick={()=>vegcartdecrease(item.id) } className='button'>-</button>{vegcard[item.id] ? vegcard[item.id]:0 }<button onClick={() => veginecrease(item.id)} className='button'>+</button><br></br>
                  <input type='button' value={"pay now"} className='pay_know' onClick={() => {vegpayment(item.id)}}/>

                </div>
                </>
              )

            })
          }
          {
            nondetails && nondetails?.map((item,id) => {

              return(
                <div className='items_cart'>
                <img src={item.recepies_image} alt='image is not found' key={id} />
                <h6>{item.recepies_name}</h6>
                <span className='span'><i class="fa-regular fa-star"></i>  {item.recepie_rateing}</span>
                <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.recepie_cost*noncard[item.id]}</span><br></br>
                <button onClick={()=> nondecrease(item.id)} className='button'>-</button>{noncard[item.id] ? noncard[item.id]:0 }<button onClick={() => nonincrease(item.id)} className='button'>+</button><br></br>
                <input type='button' value={"pay now"} className='pay_know' onClick={() => {nonpayment(item.id)}}/>

              </div>
              )
            })
          }

        </div>

      </div>
    </>
  ) 

        

}

export default Cart