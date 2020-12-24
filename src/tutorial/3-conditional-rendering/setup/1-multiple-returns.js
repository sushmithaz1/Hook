import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading,setLoading] = useState(true);
  const[Error,setError] = useState(false);
  const[user,setUser] = useState('default user');

  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299){
        return resp.json();
      }
      else{
        setError(true);
        setLoading(false);
        throw new Error(resp.statusText);
      }
      resp.json()})
    .then((user)=>{
      const{login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch((error)=>console.log(error));
  },[]);

  if(isLoading){
    return(
      <>
        <h2>Loading...</h2>
      </>
    )
  }
  if(Error){
    return(
      <>
        <h2>Error..</h2>
      </>
    )
  }
  return(
    <>
      <h2>{user}</h2>
    </>
  )
 
};

export default MultipleReturns;
