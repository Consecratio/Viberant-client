import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'


const NewPost = (props) => {
    const [show, setShow] = useState(false);
    // const [user_id, setUser_id] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [content, setContent] = useState('')
    const [maxAttendees, setMaxAttendees] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [address, setAddress] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    console.log(props)

    const submitPost = async (e) => {
        try {
            e.preventDefault()
            const requestBody = {
                user_id: props.currentUser.id,
                title: title,
                tags: tags.split(','),
                content: content,
                max_attendees: maxAttendees,
                event_date: eventDate,
                address: address,
                img_url: imgUrl
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts/new`, requestBody)
            console.log('🦄',response)
        } catch (error) {
            console.log('🆘', error)
        }
        handleClose()
    }



    return (
        <div>
            <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#FF4BA6", border:"none"}}>
                Create An Event
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create A New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                <Form onSubmit={submitPost}>
                    {/* <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Control type="hidden" onChange={e => setUser_id(e.target.value)} value={props.currentUser.id} />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter event title" onChange={e => setTitle(e.target.value)} value={title} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTags">
                        <Form.Label>Tags (seperate tags by commas and no space)</Form.Label>
                        <Form.Control type="text" placeholder="outdoors,trip,etc" onChange={e => setTags(e.target.value)} value={tags} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Add event description here</Form.Label>
                        <Form.Control type="text" placeholder="Event description" onChange={e => setContent(e.target.value)} value={content} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMaxAttendees">
                        <Form.Label>Max Attendees</Form.Label>
                        <Form.Control type="number" placeholder="Max number of attendees" onChange={e => setMaxAttendees(e.target.value)} value={maxAttendees} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date of the Event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" onChange={e => setEventDate(e.target.value)} value={eventDate} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Event Location</Form.Label>
                        <Form.Control type="text" placeholder="Event location" onChange={e => setAddress(e.target.value)} value={address} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Event photo</Form.Label>
                        <Form.Control type="text" placeholder="Url here" onChange={e => setImgUrl(e.target.value)} value={imgUrl} />
                    </Form.Group>
                
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={submitPost}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewPost

