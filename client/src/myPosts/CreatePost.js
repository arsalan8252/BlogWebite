import React,{useState} from 'react';
import { Button, Container, FloatingLabel, Form, Image } from 'react-bootstrap';
import {createP} from '../service/api';
import {useNavigate} from 'react-router-dom';


const initialValues = {
    name : '',
    title : '',
    description: '',
    picture : '',
    username : 'arsalan',
    categories : 'All',
    createDate : new Date(),

}

const CreatePost = () => {
    const navigate = useNavigate();
    const url = 'https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg';
    const [Post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({...Post, [e.target.name]:e.target.value});
    }
    const savePost = async () => {
       await createP(Post);
       setPost(initialValues);
       navigate('/');
    }

  return (
   <>
    <Container fluid className='p-0'>
        <Image src={url} alt='Banner Image' className='myImage' />
        <Container className='my-4 text-center'>
            <h3 classname=''>What are you writing</h3>
        </Container>
        <Container className='border p-3'>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Control type='text' placeholder='Title' className='rounded-0 shadow-none' name='title' value={Post.title} onChange={(e)=>handleChange(e)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control as='textarea' rows={3}  placeholder='Tell your story' name='description' value={Post.description} className='rounded-0 shadow-none' onChange={(e)=>handleChange(e)} />
                </Form.Group>
                <Button onClick={()=>savePost()} className='rounded-0 shadow-none btn-dark'>Publish</Button>
            </Form>
        </Container>
    </Container>
   </>
  )
}

export default CreatePost