import React, { useState } from 'react';

const UseStateObject = () => {
  const [obj,setObj] =useState({
    name : 'sush',
    age:10,
    message:'random title',
  });
const ChangeMessage = ()=>{
  setObj({...obj, message:'Hello Everyone'});
}

  return (
    <>
    <h3>{obj.name}</h3>
    <h3>{obj.age}</h3>
    <h4>{obj.message}</h4>

    <button className="btn" onClick={ChangeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
