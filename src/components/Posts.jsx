import { useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


const Posts = () => {
    const [post, setPost] = useState([])
// map through the POST DB to display all posts with specific tags
    useEffect (() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts`)
        .then(response => response.json())
        .then(postsData => {
            console.log(postsData)
            setPost(postsData)
        })
        .catch(err => console.log(err))
    }, [])

    let renderedPosts = []
    
    if(post){
        renderedPosts = post.map((post, idx) => {
            return (
                <div id={idx}>
                    <h2>
                        {post.title}
                    </h2>

                    <h4>
                        {post.event_date}
                    </h4>

                    <h5>
                        {post.tags}
                    </h5>

                    <p>
                        {post.content}
                    </p>
                </div>
            )
        })
        console.log(renderedPosts)
    }

    return (
        <div>
            <h1>hello</h1>
            { renderedPosts }
        </div>
    )
}

export default Posts