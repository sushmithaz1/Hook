import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);

  const checkSize =()=>{
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    console.log('USeEffect called');
      window.addEventListener('resize',checkSize)
    //  return () =>{
    //    console.log(cleanup);
    //    window.removeEventListener('resize',checkSize);
     // };
  },[]);
  console.log('render');
  return (
    <>
    <h3>Window</h3>
    <h4>{size}</h4>
      
    </>
  );
};

export default UseEffectCleanup;
