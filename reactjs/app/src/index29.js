import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function UseEffectHookExample() {
    var [posts, setPosts] = useState([]);
    useEffect(() => {
        var url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
        if (posts.length == 0)
            fetch(url).then((response) => response.json()).then((data) => setPosts(data));
    });
    var DeletePost = (id) => {
        // alert(id);
        var url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then((response) => {
            if (response.status === 200) {
                setPosts(posts.filter((post) => {
                    return post.id !== id;
                }));
            }
            else
                return;
        });
    }
    var AddPost = () => {
        setPosts([...posts,{
            "userId": 999,
            "id": 199,
            "title": "Ankit Patel Post",
            "body": "this is post detail posted by Ankit"
          }]);
    }
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-3'>
                <form>
                    <div className='card shadow border'>
                        <div className='card-header'>
                            <h3>Add Post</h3>
                        </div>
                        <div className='card-body'>
                            <div className='mb-3'>
                                <label htmlFor='userid'>User Id</label>
                                <input type='text' className='form-control' id='userid' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='title'>Title</label>
                                <input type='text' className='form-control' id='title' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='body'>Detail</label>
                                <textarea type='text' className='form-control' id='body'>
                                </textarea>    
                            </div>
                            <div className='mb-3'>
                                <button type='button' className='btn ' onClick={(e) => AddPost()}>Add new post</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-lg-9'>
                <div className='row'>
                    <div className='col-12'>
                        <table className='table table-bordered table-striped' width='100%'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Detail</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => {
                                    return <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => DeletePost(post.id)}>Delete Post</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookExample />);