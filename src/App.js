
import { useState } from 'react';
import './App.css';


function App() {
  const productList=[
    {
      productImage:'images/camera.jpg',
      productName:'Camera Product',
      productRating:5,
      productPrice:'$40.00 - $80.00',
      },
    {
      productImage:'images/fancy.jpg',
      productName:'Fancy Item',
      productRating:2,
      productPrice:'$20.00 $18.00',
    },
    {
      productImage:'images/lens.jpg',
      productName:'Camera Lens Item',
      productRating:4,
      productPrice:'$50.00 $25.00',
    },

    {
      productImage:'images/milk.jpg',
      productName:'Popular Milk Item',
      productRating:4,
      productPrice:'$50.00 $25.00',
    },

    {
      productImage:'images/mobile.jpg',
      productName:'Mobile Sale Item',
      productRating:3,
      productPrice:'$50.00 $25.00',
      },
    {
      productImage:'images/pineforest.jpg',
      productName:'Pineforest Fancy Product',
      productRating:1,
      productPrice:'$120.00 - $280.00',
    },
    {
      productImage:'images/sdcard.jpg',
      productName:'Special SDCard  Item',
      productRating:5,
      productPrice:'$20.00 $18.00',
    },

    {
      productImage:'images/toy.jpg',
      productName:'Popular Toy Item',
      productRating:3,
      productPrice:'$40.00',
    },
    

  ]
 const [cartVal,setCartVal]=useState(0)
  return (
    <div className="App">
      <h1>Cart:{cartVal}</h1>
      {
        productList.map((product,index)=>
       <ProductCard 
       key={index}
       productImage={product.productImage}
       productName={product.productName}
       productRating={product.productRating}
       productPrice={product.productPrice}
       cartVal={cartVal}
       setCartVal={setCartVal}
       />
        )
      }
    
    </div>
  );
}

function Rating(props){
  
 return(
  
    <span className="fa fa-star checked"></span>
  
   
 )
}

function ProductCard({productImage,productName,productRating,productPrice,cartVal,setCartVal}){
  const [btnshow,setBtnshow]=useState(true)
 
  const addCartHandler=()=>{
    setBtnshow(false)
    setCartVal(cartVal+1)
   
  }
  const removeCartHandler=()=>{
    setBtnshow(!btnshow)
    setCartVal(cartVal-1)
   
  }
  return(
   
   <div className='product'>
   
    <img src={productImage} alt={productName}/>
    <h3>{productName}</h3>
    <p>{productPrice}</p>
    <div className='rating'>
    {[...Array(productRating)].map((x, i) =>
    <p><Rating/></p>
  )}
  </div>

    {btnshow? <button onClick={addCartHandler}>Add to cart</button>:

    <button onClick={removeCartHandler}>Remove from cart</button>

  }
  
   </div>
  )
  
}

export default App;
