import { useState, useEffect} from 'react'
import axios from 'axios'

const Posts = () => {
    const [post, setPost] = useState([])
// map through the POST DB to display all posts with specific tags
    useEffect (() => {
        const getAllPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts`)
                console.log(response.data)
                setPost(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllPosts()
    }, [])

    let renderedPosts = []
    
    if(post){
        renderedPosts = post.map((post, idx) => {
            return (
                <div key={idx}>
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