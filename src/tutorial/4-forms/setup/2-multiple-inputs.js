import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {

  const[people,setPeople]=useState({
    firstName:'',
    email:'',
    age:''
  });
  const[person,setPerson]=useState([]);

  const handleChange=(e)=>{
   const name=e.target.name;
    const value=e.target.value;
    setPeople({...people,[name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (people.firstName && people.email && people.age) {
      const Newperson = {...people, id: new Date().getTime().toString()};

      setPerson([...person, Newperson]);
      setPeople({firstName:'',email:'',age:''});
  }
};

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={people.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={people.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={people.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {person.map((peoplee) => {
          const { id, firstName, email, age } = peoplee;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}

      </article>
    </>
  );
};

export default ControlledInputs;
