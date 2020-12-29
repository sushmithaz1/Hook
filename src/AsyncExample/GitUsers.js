import React from "react"
import FetchGit from "./FetchGit";

const Users=()=>{
    const url = 'https://api.github.com/users';
    const{loading,users}=FetchGit(url);
    return(
        <div className="users">
        {users.map((user)=>{
           const { id, login, avatar_url, html_url } = user;
           return (
             <li key={id}>
               <img src={avatar_url} alt={login} />
               <div>
                 <h4>{login}</h4>
                 <a href={html_url}>profile</a>
               </div>
             </li>
        );
    })}
  </div>   
  );
}
export default Users;
/*
    function* createColorIterator(array) {
     const available=array;
      
      while(available.leength!==0){
         const randomIndex=Math.floor(Math.random()*available.length);
         const value=available[randomIndex];

         available.splice(randomIndex,1);
         yield value;
      }
    }
    const names=["Dom","shelly","tinny","marie"];
    const uniqueNames=createColorIterator(names);
    for(const n of uniqueNames){
        console.log(n);
    }
    }*/