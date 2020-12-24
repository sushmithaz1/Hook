import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text,setText]=useState('');
  const [Error,setError]=useState('false');

  
  return (
    <>
      <h1>{text||"john"}</h1>
      <button className="btn" onClick={()=>{
        setError(!Error);
      }}>Toggle error</button>
      {Error && <h1>Error...</h1>}
      {Error?(<p>There is an error</p>)
      :(<h2>There is no error</h2>)
      }

      </>
  );
};

export default ShortCircuit;
