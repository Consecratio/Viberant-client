import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Form, Button } from 'react-bootstrap'
import { useState } from 'react'


const NewPost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Create An Event
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create A New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter user id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter event title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="Enter tags here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Add event description here</Form.Label>
                        <Form.Control type="text" placeholder="Event description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMaxAttendees">
                        <Form.Label>Max Attendees</Form.Label>
                        <Form.Control type="number" placeholder="Max number of attendees" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAttendees">
                        <Form.Label>Current Number of Attendees</Form.Label>
                        <Form.Control type="number" placeholder="Current number of attendees" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date of the Event</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Event Location</Form.Label>
                        <Form.Control type="text" placeholder="Event location" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Event photo</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewPost

