import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const reference=useRef(null);

  const submitChanges=(e)=>{
    e.preventDefault();
    console.log(reference.current.value);
  }
  useEffect(() => {
    console.log(reference.current);
    reference.current.focus();
  });

  return(
    <>
      <form className="form" onSubmit={submitChanges}> 
        <input type="text" ref={reference}></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default UseRefBasics;
