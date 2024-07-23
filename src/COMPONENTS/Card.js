import React, { useState } from 'react'
import { myDatabase } from '../firebase'
import { useEffect } from 'react'

function Card() {
       const[productsData,setproductsData]=useState([])

   useEffect(
    function()
    {
        myDatabase.collection('products').onSnapshot(function(snapshot){
                 setproductsData( snapshot.docs.map(function(i){
                    return (i.data())
                    
                  }))            
        })
    }
   )

   function collectData(event){
          if(localStorage.getItem('cart')== null)
          {
            var cart ={}
          }
          else {
             cart=JSON.parse(localStorage.getItem('cart'))
          }
          let myId=event.target.id
          if(cart[myId] === undefined){
            var name = document.getElementById('myname'+myId).innerText
            var price = Number(document.getElementById('price'+myId).innerText)
            var quantity =1
            cart[myId]=[quantity,name,price,]
          }
          else{
            quantity=cart[myId][0]+1
            cart[myId][0]=quantity
            price = Number(document.getElementById('price'+myId).innerText)*quantity
            cart[myId][2]=price
          }
       localStorage.setItem('cart',JSON.stringify(cart))


       displayCart(cart)
       function displayCart(mycart){
        var cartData=''
        for(let i in mycart){
         // eslint-disable-next-line no-useless-concat
        cartData = cartData + 'QTY:' + mycart[i][0] + ""+ 'NAME:' + mycart[i][1]+"" + 'PRICE:' + mycart[i][2] +""+ '<br/>';
      
        }
        cartData =cartData + "<a href='prouctData.html' class='btn btn-success'>Contine</a>"

        document.getElementById('mypopover').setAttribute('data-content',cartData)

       }
      


   }
  return (
    <div className='all' style={{display:'flex'}}>
      {
    productsData.map(function(i){
        return <div  key ={i.slno} className="card" style={{width:200 ,margin:20,padding:20}}>
          <h2>{i.slno}</h2>
      <img src={i.imageUrl} className="card-img-top" alt="..."></img>
 
        <div className="card-body">
          <h5 className="card-title" id={'myname'+i.slno}>{i.name}</h5>
          <p className="card-text">{i.description}</p>
          <del><h5 className="card-title" id={'price'+i.slno}>{i.originalPrice}</h5></del>
          <h5 className="card-title">{i.discountPrice}</h5>
          <button className="btn btn-primary" onClick={collectData} id ={i.slno}>Add to Cart</button>
        </div>
      </div>
    })
      }

    </div>
  )
}

export default Card