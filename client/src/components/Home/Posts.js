import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
  const count = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Container className="border p-3 mt-lg-0 mt-md-0 mt-sm-3 mt-xs-3">
        <Button className="d-block w-100 shadow-none rounded-0 btn-dark mb-3">
          All Posts
        </Button>
        <Row>
          {count.map((item) => (
            <Col lg='4' md='6' sm='12' className='mb-3'>
              <Post />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Posts;
