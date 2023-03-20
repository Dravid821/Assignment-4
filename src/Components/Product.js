import React from 'react'
import '../data'

export default function Product() {
  return (
    SAMPLE_PRDDUCTS && SAMPLE_PRDDUCTS.map((item)=>{
        <Productcard data = {item} />
    })
    
  )
}
