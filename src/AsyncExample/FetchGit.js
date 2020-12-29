import React, { useState, useEffect } from "react";

const FetchGit=(url)=>{
        const[users,setUser]=useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      };
    
    useEffect(() => {
        getUsers();
    },[]);

    return (
        {users}         
      );

}
export default FetchGit;