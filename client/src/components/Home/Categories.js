import React from 'react';
import data from '../constants/data';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <Container className='border p-3 categories'>
        <Link to='/create' className='nav-link p-0'><Button className='d-block w-100 shadow-none rounded-0 btn-dark mb-3'>Create Blog</Button></Link>
        <Table striped bordered hover className='m-0'>
            <thead>
                <tr>
                    <th>All Categories</th>
                </tr>
            </thead>
            <tbody>
               {
                   data.map((cat, index)=>(
                       <tr key={index}>
                           <td>{cat}</td>
                       </tr>
                   ))
               }
            </tbody>
        </Table>
    </Container>
  )
}

export default Categories