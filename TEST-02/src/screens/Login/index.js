import React, { useState } from "react"
import { Form, Button, Row, Col, Container, Card, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SendToService } from '../../service/serviceClient'

const Login = (props) => {
    // const { classes, _setLoginStatus, system } = props
    const [state, setState] = useState({
        typePassword: 'password'
    })
    const handleChange = id => e => {
        const value = e.target.value
        setState({
            ...state,
            [id]: value
        })
    }
    const handleLogin = () => {
        let request = {
            email: state.email,
            password: state.password
        }
        SendToService(request, 'POST', 'login', response => {
            let token = response.headers['x-auth-token']
            localStorage.setItem('x-auth-token', token)
            // _setLoginStatus(true)
            props.history.push('/')
        })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <div style={{ marginTop: 150 }}>
                            <Card style={{ padding: 30, backgroundColor: "#121013" }}>
                                <h4 style={{ fontFamily: "sans-serif", fontSize: 30, paddingBottom: 10, color: "white" }}>Sign In</h4>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                                        <Form.Control id="email" type="email" placeholder="Enter email" onChange={handleChange} />
                                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{ color: "white" }}>Password</Form.Label>
                                        <Form.Control id="password" type="password" placeholder="Password" onChange={handleChange} />
                                    </Form.Group>
                                    {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                                    <Button variant="primary" type="submit" style={{ width: "100%", fontWeight: "bold" }} onClick={handleLogin}>
                                        Sign In
                            </Button>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login