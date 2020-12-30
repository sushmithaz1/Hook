import React, { useState } from "react"
import FetchGit from "./FetchGit";
import Newpagination from './Newpagination';
import {BeatLoader} from 'react-spinners';

const Users=()=>{

  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage,setPostsPerPage]=useState(5);

    const url = 'https://api.github.com/users';
    const{loading,users}=FetchGit(url);

    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost - postsPerPage;
    const currentPosts=users.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);

    return(
        <div>
            <Post user={currentPosts} loading={loading}/>
            <Newpagination  postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate} />
        </div>
    );
}


const Post=({user,loading})=>{

  if(loading){
    return(
      <>
      <h2>Loading...</h2>
      <BeatLoader loading/>
     </>
    );
  }
  else{
  return(
  <div className="users">
  {user.map((user)=>{
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

}
export default Users;
