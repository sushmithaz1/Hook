import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
      console.log('use effect called');
      if(count>0){
      document.title=`New Messages(${count})`;
      }
  },[]);

  console.log('rendered');
  return (
    <>
    {count}
    <button className='btn' onClick={()=>setCount(count+1)}>
      call me
      </button>
    </>
  );
};

export default UseEffectBasics;
