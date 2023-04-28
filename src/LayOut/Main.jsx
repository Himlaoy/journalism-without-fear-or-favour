import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Page/LeftNav/LeftNav';
import RightNav from '../Page/RightNav/RightNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col lg={3}>
                    <LeftNav></LeftNav>
                </Col>
                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;