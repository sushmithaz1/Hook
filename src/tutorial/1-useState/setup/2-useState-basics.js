import React, { useState } from 'react';

const UseStateBasics = () => {
  const[name,setName]=useState('RandomText');

  const ChangeName=(e)=>{
    e.preventDefault();
    if(name==="RandomText"){
    setName("Hello World");
    }
    else{
      setName("RandomText");
    }
  }
  
  return(
  <React.Fragment>
      <>
        {name}
        <button className='btn' onClick={ChangeName}>Change Name</button>
      </>
  </React.Fragment>
  )
};

export default UseStateBasics;
