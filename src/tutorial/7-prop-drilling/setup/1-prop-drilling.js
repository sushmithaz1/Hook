import React, { useState } from 'react';
import {data} from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const[people,setPerson]=useState(data);
  const removeName=(id)=>{
    setPerson((person)=>{
    return person.filter((data)=>data.id!==id)
    });
  };
  return(
    <>
  <List people={people} removeName={removeName}/>
  </>
  );

}


const List=({people,removeName})=>{
  return(
    <>
  {people.map((person)=>{
    return(
    <SinglePerson 
    key={person.id}
    {...person}
    removeName={removeName}/>
    );
  })}
  </>
  );
  
};
const SinglePerson=({id,name,removeName})=>{
 return(
   <div className='item'>
  <h2>{name}</h2>
  
  <button onClick={() => removeName(id)} >remove</button>
  </div>
  );


}

export default PropDrilling;
