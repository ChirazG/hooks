import './App.css';
import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { v4 as uuidv4 } from 'uuid';

const AddModal = ( {addMovie}) => {
    const [newMovie, setNewMovie] = useState({
        image:"",
        name:"" ,
        genre:"",
        rate:1
    })

    const handleChange=(e)=>{
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    
    }

    const handleSave =()=>{
        addMovie(newMovie);
        setNewMovie({
        id:uuidv4(),
        image:"",
        name:"" ,
        genre:"",
        rate:1
        })
    }

const onStarClick=(nextValue, prevValue, name)=> {  setNewMovie({...newMovie, rate:nextValue}) 
}
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="outline-info" onClick={handleShow}>Add movie</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your movie!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" name="name" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Image url</Form.Label>
                            <Form.Control placeholder="Image url" name="image" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Genre</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="genre" onChange={handleChange}>
                                    <option>Action</option>
                                    <option>Thriller</option>
                                    <option>Drama</option>
                                    <option>Comedy</option>
                                    <option>Science fiction</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={newMovie.rate}
                            onStarClick={onStarClick}
                        />

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={()=>handleSave()}>
                        Add 
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddModal
