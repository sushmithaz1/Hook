import React, { useState, useEffect } from "react";

const FetchGit=(url)=>{
        const[users,setUser]=useState([]);
        const[loading,setLoading]=useState(true);

    const getUsers = async () => {
        const response =  await fetch(url);
        const users =  await response.json();
        setUser(users); 
  };
    
    useEffect(() => {
      setTimeout(()=>{      
        setLoading(true);
        getUsers();
      setLoading(false);
      },2000);
    },[]);

    return (
        {loading,users}         
    );
}
export default FetchGit;