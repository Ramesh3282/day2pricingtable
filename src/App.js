
import './App.css';


function App() {
const productDetails=[
  {
    image:'images/camera.jpg',
    productType:'Camera Product',
    rating:[1,2,3],
    price:'$40.00 - $80.00',
    },
  {
    image:'images/fancy.jpg',
    productType:'Fancy Item',
    rating:[1,2],
    price:'$20.00 $18.00',
  },
  {
    image:'images/lens.jpg',
    productType:'Camera Lens Item',
    rating:[1,2,3,4,5],
    price:'$50.00 $25.00',
  },

  {
    image:'images/milk.jpg',
    productType:'Popular Milk Item',
    rating:[1,2,3,4],
    price:'$50.00 $25.00',
  },

  {
    image:'images/mobile.jpg',
    productType:'Mobile Sale Item',
    rating:[1,2,3,4,5],
    price:'$50.00 $25.00',
    },
  {
    image:'images/pineforest.jpg',
    productType:'Pineforest Fancy Product',
    rating:[1],
    price:'$120.00 - $280.00',
  },
  {
    image:'images/sdcard.jpg',
    productType:'Special SDCard  Item',
    rating:[1,2,3,4,5],
    price:'$20.00 $18.00',
  },

  {
    image:'images/toy.jpg',
    productType:'Popular Toy Item',
    rating:[1,2,3,],
    price:'$40.00',
  },
  

]
  return (
    <div className="App">
      <div className='topbtn'>
        <Home/>
        <About/>
        <button id="product">Products</button>
      </div>
      <Cart/>
      <br/>
      <br/>
      { productDetails.map((value,index)=>(
         <Shop 
          key={index}
          id={index}
          image={value.image}
          productType={value.productType}
          rating={value.rating}
          price={value.price}
        
         />
      ))}
     
    
    </div>
  );
}

function Home(){
  return(
    <button id='home'>Home</button>
  )
  
}

function About(){
  return(
    <button id="about">About</button>
  )
  
}

function addCartClick(event){

  const val=document.getElementById('cartval').innerHTML
  const getId=event.target.id
  document.getElementById('cartval').innerHTML= +val +1
  document.getElementById(getId).disabled = true;
  const data=document.getElementById("product_"+getId)
  document.getElementById("product_"+getId).innerHTML +=`  <button id=removecart${getId}  onClick="removeCart(${getId})">Remove from cart</button>`
  
}
window.removeCart=function(id){
  const val=document.getElementById('cartval').innerHTML
  
  document.getElementById('removecart'+id).remove();
  document.getElementById('cartval').innerHTML= +val -1
  document.getElementById(id).disabled = false;
  document.getElementById(id).setAttribute("onClick","addCartClick");

  
}
function Rating(props){
 return(
  
    <span class="fa fa-star checked"></span>
   
 )
}
function Shop(productList){
  
  return(

   <div className='product' id={"product_"+productList.id}>
    <img src={productList.image} alt="cart"/>
    <p><h3>{productList.productType}</h3></p>
    <p>{productList.rating.map(item => <Rating />)}</p>
    <p>{productList.price}</p>
  
    <button id={productList.id} onClick={addCartClick}>Add to cart</button>
    
   </div>
  )
  
}
function Cart(){
  return(
    <button id="cart">Cart <span id="cartval">0</span></button>
  )
  
}
export default App;
