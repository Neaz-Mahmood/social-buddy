import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>setPosts(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Social Buddy</h1>
            {
                posts.map(post=> <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;