import React from "react";
import {Link} from 'react-router-dom';
import { Card, Button } from "react-bootstrap";

const Post = () => {
  const url =
    "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <Card>
      <Card.Img variant="top" src={url} height="auto" />
      <Card.Body>
        <Card.Subtitle className="d-flex justify-content-between flex-wrap">
          <h6>Card title</h6>
          <h6>Author</h6>
        </Card.Subtitle>
        <Card.Title className="my-2">card subtitle</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/view' className='nav-link p-0'><Button className='btn-dark rounded-0 shadow-none d-block w-100'>View Post</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
