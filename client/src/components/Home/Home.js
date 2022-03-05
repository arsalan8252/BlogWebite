import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Container fluid className="py-5 px-3">
        <Row>
          <Col lg="3" md="4" sm="12">
            <Categories />
          </Col>
          <Col lg="9" md="8" sm="12">
            <Posts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
