import React from 'react'
import { Image, Container } from 'react-bootstrap';

const Banner = () => {
    const url = 'https://images.pexels.com/photos/9906085/pexels-photo-9906085.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.55&h=500&sharp=10&w=1500';
  return (
    <>
        <Container fluid className='p-0 position-relative'>
            <Image src={url} alt='Banner image' className='img-fluid' width='100%' />
            <div className='hero-text'>
            <h1 className='mb-4'>Mr. Blogger</h1>
            <h4>My First Blog</h4>
            </div>
        </Container>
    </>
  )
}

export default Banner