import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Newpagination from './Newpagination';
import { renderIntoDocument } from 'react-dom/test-utils';
import { BeatLoader } from 'react-spinners';

const App =()=>{
    const[posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const[currentPage,setCurrentPage]=useState(1);
    const[postsPerPage,setPostsPerPage]=useState(5);

    useEffect(()=>{
        const fetchPosts=async()=>{
            setLoading(true);
            const res=await axios.get('https://api.github.com/users');
            setPosts(res.data);
            setLoading(false);

        };
        fetchPosts();

    },[]);

    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost - postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber);

    return(
        <div>
            <Post user={currentPosts} loading={loading}/>
            <Newpagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    );
};

const Post=({user,loading})=>{
    if(loading){
        <BeatLoader loading/>
        return <h2>loading..</h2>
    }
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
export default App;