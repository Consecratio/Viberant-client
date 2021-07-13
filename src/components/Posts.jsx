import { useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


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
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={post.img_url} />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.tags}</Card.Subtitle>
                            <Card.Text>
                            {post.content}
                            </Card.Text>
                            <Button variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        console.log(renderedPosts)
    }

    return (
        <div>
            <h1>See what's happening</h1>
            { renderedPosts }
        </div>
    )
}

export default Posts