import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const HelloWorld = () => {
  return (
    <div className="login">
      <div className="login--inner">
        <h1 className="login--logo">Live Track</h1>
        <Form className="login--inner_form">
          <FormGroup>
            <Input type="text" name="username" id="username" placeholder="username" />
          </FormGroup>
          <FormGroup className="border-bottom pb-3">
            <Input type="password" name="password" id="password" placeholder="password" />
          </FormGroup>
          <Button color="success" block>Login</Button>
          <Button color="primary" block>Did you forget your password?</Button>
        </Form>
      </div>
    </div>
  );
};

export default HelloWorld;
