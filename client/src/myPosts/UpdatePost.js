import React from 'react'
import { Container, Form, Image, Button } from 'react-bootstrap'

const UpdatePost = () => {
    const url = 'https://images.pexels.com/photos/4132326/pexels-photo-4132326.jpeg';
  return (
    <Container fluid className='p-0'>
        <Image src={url} alt='Banner Image' className='myImage' />
        <Container className='my-4 text-center'>
            <h3 classname=''>What's your new Idea</h3>
        </Container>
        <Container className='border p-3'>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Control type='text' placeholder='Title' className='rounded-0 shadow-none' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control as='textarea' rows={3}  placeholder='Your description' className='rounded-0 shadow-none' />
                </Form.Group>
                <Button className='rounded-0 shadow-none btn-success'>Update</Button>
            </Form>
        </Container>
    </Container>
  )
}

export default UpdatePost