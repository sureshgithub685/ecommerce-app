import React from 'react'
import { useEffect } from 'react'
import { myDatabase } from '../firebase.js'

function CustmerData() {

      useEffect(function(){

        const name=localStorage.getItem('NAME')
        const city=localStorage.getItem('CITY')
        const country=localStorage.getItem('COUNTRY')
        const pincode=Number(localStorage.getItem('PINCODE'))
        const total= Number(localStorage.getItem('total'))
        myDatabase.collection("custmer").add({
            name:name,
            city:city,
            country:country,
            pincode:pincode,
            total:total
    
    
        })
      })


  
  return (
    <></> 
  )
}

export default CustmerData