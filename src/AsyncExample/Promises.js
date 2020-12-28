
 const Posts=[
    'first post',
    'second post'
];
function getPosts(){
    setTimeout(()=>{
        let output='';
   
        output+=`<li>${Posts}</li>`;

    document.body.innerHTML = (output);
}, 1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        Posts.push(post);
        callback();
    },2000);
}
createPost('Third post',getPosts);
export default Posts;