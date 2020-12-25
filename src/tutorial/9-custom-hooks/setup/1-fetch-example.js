import React, { useState, useEffect, useCallback } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const{loading,products}=useFetch(url);
  console.log(products);
  return(
  <h2>{(loading?"loading":"Data")}</h2>
  )
}

export default Example
