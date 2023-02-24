import React from 'react'
import {Button, Form} from 'react-bootstrap';

 const FormInput = () => {
    const onSubmitHand = (e)=>{
        e.preventDefault();
        console.log(e)
    }
  return (
    <div>
    <Form onSubmit={onSubmitHand} className="p-2 m-2">
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
      
    </Form>
    
    </div>
    
  )
  
}
export default FormInput;