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