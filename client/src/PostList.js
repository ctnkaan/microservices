import React, { useState, useEffect } from 'react'
import axios from "axios"
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

function PostList() {

    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4002/posts");
        setPosts(res.data);
    };


    //only runs when the component is mounted
    useEffect(() => {
        fetchPosts();
    }, []);


    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card mb-3" key={post.id}>
                <div className="card-body">
                    <h2>{post.title}</h2>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    });

    return (
        <div>
            {renderedPosts}
        </div>
    )
}

export default PostList