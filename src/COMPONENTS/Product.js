import React, { useState } from 'react'
import { myDatabase } from '../firebase'

function Product() {



  const[ProductData,setproductsData] =useState({
    productSlno:'',
    productName:'',
    productImageUrl:'',
    productdescription:'',
    prductOriginalPrice:'',
    ProductDiscountPrice:''

})

function collectIt(event){
   const myData=event.target.value
  setproductsData({...ProductData,[event.target.name]:myData})
  console.log(ProductData)
}
function savaData(){
  myDatabase.collection('products').add({
    slno:ProductData.productSlno,
    name:ProductData.productName,
    imageUrl:ProductData.productImageUrl,
    description:ProductData.productdescription,
    originalPrice:ProductData.prductOriginalPrice,
    discountPrice:ProductData.ProductDiscountPrice

  })
  window.location.pathname='/home'
}
  return (
    <div style={{margin:40}}>

      <div className='col-md-3'>
      Product Slno:
      <input type='text' name='productSlno' className='form-control' onChange={collectIt}></input><br></br>
      Product Name:
      <input type='text' name='productName' className='form-control' onChange={collectIt}></input><br></br>
      Product Image Url:
      <input type='text' name='productImageUrl' className='form-control' onChange={collectIt}></input><br></br>
      Product Description:
      <textarea rows='4' cols='40' name='productdescription' className='form-control' onChange={collectIt}></textarea><br></br>
      Product originalPrice:
      <input type='number' name='prductOriginalPrice' className='form-control' onChange={collectIt}></input><br></br>
      Product discountPrice:
      <input type='number' name='ProductDiscountPrice' className='form-control' onChange={collectIt}></input><br></br>
      <button className='btn btn-outline-success' onClick={savaData}>Add product</button>
      </div>

    </div>
  )
}

export default Product