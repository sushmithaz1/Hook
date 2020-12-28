import { useCallback } from "react";

export const Posts=[
    {title:'first post' ,body:'This is my first post'},
    {title:'second post' ,body:'This is my second post'}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
    Posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = (output);
}, 1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        Posts.push(post);
        callback();
    },2000);
}
createPost({title:'Third post',body:'This is post three'},getPosts);