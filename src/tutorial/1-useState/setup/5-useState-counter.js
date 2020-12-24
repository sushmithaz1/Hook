import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count,setCount] = useState(0);

  const CompInc=()=>{
    setTimeout(()=>{
        setCount((prevCount)=>{
          return prevCount+1;
        });
    },2000);
  };
  
  return(
    <div>
      <section  style={{margin:'4rem 0'}}>
        <h4>General counter</h4>
          <h4>{count}</h4>
            <button className='btn' onClick={()=>setCount(count+1)}>Increase</button>
            <button className='btn' onClick={()=>setCount(count-1)}>Decrease</button>
            <button className='btn' onClick={()=>setCount(0)}>Reset</button>
      </section>
       <section  style={{margin:12}}>
       <h4>complex counter</h4>
         <h4>{count}</h4>
          <button className='btn' onClick={CompInc}>Increase</button>
        </section>
        </div>
  );
};

export default UseStateCounter;
