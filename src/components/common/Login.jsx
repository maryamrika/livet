import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import LiveTrackLogo from '../../assets/images/logo.svg';

const Login = () => {
  return (
    <div className="login">
      <div className="login--inner">
        <h1>Live Track</h1>
        <img src={LiveTrackLogo} />
        <Form>
          <FormGroup>
            <Input type="text" name="username" id="username" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password" placeholder="password" />
          </FormGroup>
          <Button>Login</Button>
          <Button>Did u forget your password?</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
