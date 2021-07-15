import { useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import styled, {} from 'styled-components'
import HeartIcon from '../img/Frame12.png'
import { Link } from 'react-router-dom'
import './Posts.css'

const CardHolderDiv = styled.div `
    margin: 10px 0px;
`
const ImageDiv = styled.div `
    
`

const Posts = () => {
    const [post, setPost] = useState([])

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
        // map through the POST DB to display all posts with specific tags
        renderedPosts = post.map((post, idx) => {
            return (
                <div key={idx} className="col-lg-3 mb-4">
                    <Card style={{ border: "none", borderRadius: "20px" }}>
                        <Card.Img variant="top" src={post.img_url} style={{borderRadius: "20px 20px 0px 0px", height: "200px", objectFit: "cover"}}/>
                        <Card.Body style={{backgroundColor: "#C6F1FF", border: "none", borderRadius: "0px 0px 20px 20px", textAlign: "left", padding:"30px"}}>
                        <Card.Title style={{display: "flex"}}>
                            <Link to={`/event/${post._id}`} className="postLinks" style={{ fontWeight: "bold", display: "flex"}}>
                                {post.title}
                                <ImageDiv>
                                    <img src={HeartIcon} alt="Heart Icon" style={{height: "20px", width: "20px", justifyContent: "flex-end", marginLeft: "90%"}} />
                                </ImageDiv>
                            </Link>
                        </Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                            <Card.Subtitle className="mb-2" style={{color: "black", fontSize: ".75rem"}}>
                                {post.tags.map(tag => {
                                    return (
                                        <span style={{marginRight: "5px"}}>#{tag} </span>
                                    )
                                })}
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        // TODO: Delete console log
        console.log(renderedPosts)
    }

    return (
        <CardHolderDiv className="row">
            { renderedPosts }
        </CardHolderDiv>
        
    )
}

export default Posts