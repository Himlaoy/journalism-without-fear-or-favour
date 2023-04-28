import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col lg={3}>
                    
                </Col>
                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>

                </Col>
            </Row>
        </Container>
    );
};

export default Main;