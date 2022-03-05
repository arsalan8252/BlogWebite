import React from "react";
import { Button, ButtonGroup, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewPost = () => {
  const url =
    "https://images.pexels.com/photos/760728/pexels-photo-760728.jpeg";
  return (
    <Container fluid className="p-0">
      <Image src={url} alt="Banner image" className="myImage" />
      <Container className="py-4">
        <div className="w-100 d-flex justify-content-end mb-3">
            <Link to='/update' className="nav-link p-0"><Button className='rounded-0 shadow-none me-3'>Edit</Button></Link>
            <Button className='rounded-0 shadow-none btn-danger'>Delete</Button>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center flex-wrap">
            <h3 className="py-3">Title of post</h3>
            <div>
                <h6>Author: Arsalan</h6>
                <h6>Date: {new Date().toLocaleTimeString()}</h6>
            </div>
        </div>
        <div className="w-100 mt-3">
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.Aww yeah,
            you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing
            within an alert works with this kind of content.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default ViewPost;
