import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const[firstName,setFname]=useState('');
  const[email,setEmail]=useState('');
  const[people,setPeople]=useState([]);

  const HandleEvent=(e)=>{
    e.preventDefault();
    if(firstName&&email){
      const person={id:'new Date().getTime().toString()',firstName,email};
      setPeople((people)=>{
        return [...people,person];
      });
      setFname('');
      setEmail('');
    }
  }
return(
  <>
  <article>
    <form className='form'>
      <div className='form-control'>
        <label htmlFor="firstname">Name</label>
        <input type="text" id="firstName" name="firstName" value={firstName} 
        onChange={(e)=>{
            setFname(e.target.value);
        }}></input>
      </div>
      <div className='form-control'>
      <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value); }}></input>
      </div>
      <button type="button" name="btn" onClick={HandleEvent}>Submit</button>
    </form>
    {people.map((people)=>{
      const {id,firstName,email}=people
      return(
        <div className="item" key={id}>
            <h4>{firstName}</h4>
              <p>{email}</p>
        </div>
      );
    })};
  </article>
  </>
);
};

export default ControlledInputs;
