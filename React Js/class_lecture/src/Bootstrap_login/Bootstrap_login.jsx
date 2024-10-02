import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Bootstrap_login = () => {

    const submit = (event) => {
        event.preventDefault();
        alert('Form Submitted');
        document.getElementById('emailbox').value = '';
        document.getElementById('passwordbox').value = '';
    }

  return (
      <>
          
        <br />
        <br />
        <br />
      
        <Card style={{ width: '400px', border: '1px solid black', padding:'20px'}}>
        <h1 style={{textAlign:'center'}}> Login Form </h1>
        <Form style={{marginTop:'20px'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" id='emailbox' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label> Password </Form.Label>
                      <Form.Control type="password" placeholder="Enter Password" id='passwordbox'/>
            </Form.Group>
            <Button onClick={submit} type='submit' style={{width:'100%'}}> Submit </Button>
        </Form>
        </Card>
      
          
          <br />
        <br />
        <br />
      </>
  )
}

export default Bootstrap_login