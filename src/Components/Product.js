import React from 'react'
import Productcard from './Productcard'
import { SAMPLE_PRDDUCTS } from '../data'

//Data Mapping
export default function Product() {
  console.log("sample",SAMPLE_PRDDUCTS)
  return (
        SAMPLE_PRDDUCTS && SAMPLE_PRDDUCTS.map(
        (item)=>{
        return <Productcard
        data = {item}
        />
        }
    ) 
  )
}
