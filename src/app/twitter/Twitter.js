"use client"
import React, {useState} from "react";
import Post from "./Post";

const Twitter = () => {
    let dummyPosts = [
        {
            name: 'Dallin',
            post: 'Why would you not hire Jaden?',
            likes: 50
        },
        {
            name: 'Taylor',
            post: 'This project looks amazing and whoever built it should be hired immediately',
            likes: 50
        }
    ]
    const user = 'Jaden'
    const [posts, setPosts] = useState(dummyPosts)
    const [postInput, setPostInput] = useState()

    const handlePostClick = () => {
        let newPost = {
            name: user,
            post: postInput, 
            likes: 0
        }
        let newArray = [newPost, ...posts]
        setPosts(newArray)
        setPostInput('')
    }

    const handleChange = (e) => {
        setPostInput(e.target.value)
    }
    
    const handleDeleteClick = (index) => {
        let newArray = posts
        newArray.splice(index, 1)
        setPosts([...newArray])
    }

    const handleRepostClick = (i) => {
        let newPost = posts[i]
        let newArray = [newPost, ...posts]
        setPosts(newArray)
    }

    const handleLikeClick = (index) => {
        let newArray = posts
        newArray[index].likes = newArray[index].likes += 1
        setPosts([...newArray])
    }

    return (
        <div>
            <div className="post-input">
                <textarea value={postInput} onChange={handleChange} />
                <svg onClick={handlePostClick} class="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
            {posts.map((post, i) => {
                return (
                    <div key={i}>
                        <Post post={post} handleDeleteClick={handleDeleteClick} handleLikeClick={handleLikeClick} i={i} handleRepostClick={handleRepostClick}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Twitter;