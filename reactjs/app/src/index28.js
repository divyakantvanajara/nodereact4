import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function UseEffectHookExample()
{
    var [posts,setPosts] = useState([]);
    useEffect(() =>{
        var url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
        if(posts.length==0)
            fetch(url).then((response)=> response.json()).then((data)=> setPosts(data));
    });
    var DeletePost = (id) => {
        // alert(id);
        var url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url,{
            method:'DELETE'
        }).then((response)=>{
            if(response.status === 200)
            {
                setPosts(posts.filter((post)=>{
                    return post.id !== id;
                }));
            }
            else 
                return;
        });
    }
    return (<div className='container'>
        <div className='row'>
            {posts.map((post)=>{
                return <div className='col-lg-3 col-md-3 col-sm-6 col-12 border mb-3 shadow' key={post.id}>
                <div className='card'>
                    <div className='card-header text-bg-danger'>
                        <h3>{post.title}</h3>
                    </div>
                    <div className='card-body'>
                    <p>
                        {post.body}
                    </p>
                    <button className='btn btn-danger' onClick={()=>DeletePost(post.id)}>Delete Post</button>
                    </div>
                </div>
                </div>
            })}
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookExample />);