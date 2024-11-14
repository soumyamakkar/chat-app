import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Signup() {
  return (
    <Container>
    <Form>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Your Unique Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="Other">Other</option>
        </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
    </Container>
  )
}

export default Signup
