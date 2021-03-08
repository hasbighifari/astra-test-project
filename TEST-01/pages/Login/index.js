import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from "react-bootstrap"
import style from './style'


const Login = () => <>
    <Container>
        <Row className="justify-content-lg-center">
            <Col lg={6}>
                <div style={{ marginTop: 50 }}>
                    <h1 style={{ paddingBottom: 20 }}>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: "100%" }}>
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>
</>

export default Login