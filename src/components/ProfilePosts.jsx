import { useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import PencilIcon from '../img/pencil.png'
import TrashIcon from '../img/trash.png'
import { Link } from 'react-router-dom'
import './Posts.css'

const ProfilePosts = (props) => {
    const [post, setPost] = useState([])

    useEffect (() => {
        const getAllPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts`)
                if (props.userId) {
                    setPost(response.data.filter(each => each.user_id === props.userId))
                 } else {
                    setPost(response.data)
                 }
            } catch (error) {
                console.log(error)
            }
        }
        getAllPosts()
    }, [post])


   async function handleDelete (postId) {
       try {
           console.log(postId)
            const delPost = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts/${postId}`)
            setPost([])
       } catch (err) {
           console.log(err)
       }
       
    }

    let renderedPosts = []
    
    if(post){
        // map through the POST DB to display all posts with specific tags
        renderedPosts = post.map((post, idx) => {

            return (
                <div key={idx} className="col-lg-3 mb-4">
                    <Card style={{ border: "none", borderRadius: "20px" }}>
                        <Card.Img variant="top" src={post.img_url} style={{borderRadius: "20px 20px 0px 0px", height: "200px", objectFit: "cover"}}/>
                        <Card.Body style={{backgroundColor: "#C6F1FF", border: "none", textAlign: "left", padding:"30px", minHeight: "220px"}}>
                        <Card.Title style={{display: "flex"}}>
                            <Link to={`/event/${post._id}`} className="postLinks" style={{ fontWeight: "bold", display: "flex"}}>
                                {post.title}
                            </Link>
                                <div>
                                    <img src={PencilIcon} alt="Pencil Icon" style={{height: "20px", width: "20px", justifyContent: "flex-end", marginLeft: "90%", paddingLeft: "5px"}} />
                                </div>
                                <Link onClick={() => handleDelete(post._id)} to={`/profile`}>
                                    <img src={TrashIcon} alt="Trash Icon" style={{height: "20px", width: "20px", justifyContent: "flex-end", marginLeft: "90%", paddingLeft: "5px"}} />
                                </Link>
                        </Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="mb-2" style={{color: "black", fontSize: ".75rem",borderRadius: "0px 0px 20px 20px", backgroundColor: "#DFF3FA", borderTop: "none", minHeight: "70px"}}>
                                {post.tags.map(tag => {
                                    return (
                                        <span style={{marginRight: "5px"}}>#{tag} </span>
                                    )
                                })}
                            </Card.Footer>
                    </Card>
                </div>
            )
        })
    }

    return (
            <CardGroup>
                { renderedPosts }
            </CardGroup> 
    )
}

export default ProfilePosts