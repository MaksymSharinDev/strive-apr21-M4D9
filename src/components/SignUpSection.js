import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

class SignUpSection extends React.Component {
    state = {
        name: {value: null, isValid: false},
        surname: {value: null, isValid: false},
        email: {value: null, isValid: false},
        password: {value: null, isValid: false},
        passwordConf: {value: null, isValid: false}
    }
    handleNameInput = (e) => {
        let nameLength = e.target.value.split('').length
        let name = {
            ...this.state.name,
            isValid: nameLength > 2,
            value: e.target.value
        }
        this.setState({...this.state, name})

    }
    handleSurnameInput = (e) => {
        let surnameLength = e.target.value.split('').length
        let surname = {
            ...this.state.surname,
            isValid: surnameLength > 3,
            value: e.target.value
        }
        this.setState({...this.state, surname})
    }
    handleEmailInput = (e) => {
        let validateEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase())
        }

        let email = {
            ...this.state.email,
            isValid: validateEmail(e.target.value),
            value: e.target.value
        }
        this.setState({...this.state, email})
    }
    handlePasswordInput = (e) => {
        let validatePassword = (password) => {
            const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return re.test(password);
        }
        let password = {
            ...this.state.password,
            isValid: validatePassword(e.target.value),
            value: e.target.value
        }
        this.setState({...this.state, password})
    }
    handlePasswordConfirm = (e) => {
        let passwordConf = {
            ...this.state.password,
            isValid: e.target.value === this.state.password.value,
        }
        this.setState({...this.state, passwordConf})
    }
    render() {
        return (
            <Container className={'p-3'}>

                <Form>
                    <Row>
                        <Col className={"offset-md-2 col-md-4 "}>
                            <Form.Group controlId="formName"
                                        >
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="password" placeholder="Name" onChange={this.handleNameInput}
                                              className={this.state.name.isValid === true ? 'bg-success' : 'bg-danger'}
                                />
                            </Form.Group>
                        </Col>
                        <Col className={"col-md-4"}>
                            <Form.Group controlId="formSurname"
                                        >
                                <Form.Label>Surname: </Form.Label>
                                <Form.Control type="password" placeholder="Surname" onChange={this.handleSurnameInput}
                                              className={this.state.surname.isValid === true ? 'bg-success' : 'bg-danger'}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"offset-md-3 col-md-6 "}>
                            <Form.Group controlId="formEmail"
                                        >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailInput}
                                              className={this.state.email.isValid === true ? 'bg-success' : 'bg-danger'}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"offset-md-2 col-md-4 "}>
                            <Form.Group controlId="formPassword"
                                        >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                              onChange={this.handlePasswordInput}
                                              className={this.state.password.isValid === true ? 'bg-success' : 'bg-danger'}/>
                            </Form.Group>
                        </Col>
                        <Col className={"col-md-4 "}>
                            <Form.Group controlId="formPasswordConfirm"
                                        >
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                              onChange={this.handlePasswordConfirm}
                                              className={this.state.passwordConf.isValid === true ? 'bg-success' : 'bg-danger'}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center p-3'}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>

            </Container>

        )

    }
}

export default SignUpSection

