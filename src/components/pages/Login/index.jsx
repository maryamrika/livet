/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Form,
  Col,
  Label,
  Input,
  Row,
  FormGroup,
  FormFeedback
} from 'reactstrap';

import bn from '../../../utils/bemnames';
import aplantLogo from '../../../assets/images/aplant-logo.png';
import liveLogo from '../../../assets/images/live-logo.svg';
import keplarLogo from '../../../assets/images/keplar-logo.svg';

const bem = bn.create('login');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInvalid: false,
      passwordInvalid: false,
      usernameFeedback: '',
      passwordFeedback: ''
    };
    // this.projectNameRef = null;
  }
  login = () => {
    if (this.passwordRef.value.length === 0) {
      this.setState({
        passwordInvalid: true,
        passwordFeedback: 'Please enter your password'
      });
    } else if (
      this.passwordRef.value.length < 4 &&
      this.passwordRef.value.length !== 0
    ) {
      this.setState({
        passwordInvalid: true,
        passwordFeedback: 'Your password is not valid'
      });
    } else {
      this.setState({
        passwordInvalid: false,
        passwordFeedback: ''
      });
    }
    if (this.usernameRef.value.length === 0) {
      this.setState({
        usernameInvalid: true,
        usernameFeedback: 'Please enter your username'
      });
    } else if (
      this.usernameRef.value.length < 4 &&
      this.usernameRef.value.length !== 0
    ) {
      this.setState({
        usernameInvalid: true,
        usernameFeedback: 'Your username is not valid'
      });
    } else {
      this.setState({
        usernameInvalid: false,
        usernameFeedback: ''
      });
    }
    if (
      this.usernameRef.value.length > 3 &&
      this.passwordRef.value.length > 3
    ) {
      this.props.history.push('phone-system');
    }
  };
  render() {
    return (
      <div className={bem.b()}>
        <Container>
          <div className="d-flex align-items-end justify-content-center pb-1">
            <img className="aplant-logo" src={aplantLogo} alt="" />
            <img className="aplant-logo ml-4" src={liveLogo} alt="" />
          </div>
          <Card>
            <CardHeader tag="div" className="position-relative pt-5 pb-0">
              <p className="pt-3 pb-2 h5 pl-4">Please Login Below</p>
              <img className="keplar-logo" src={keplarLogo} alt="" />
            </CardHeader>
            <CardBody className="p-5 bg-light-gray">
              <div>
                <p className="pb-3 h6">
                  The username and password you need to provide is the same one
                  you use to login to your computer when you first turn it on,
                  or the one you use to login to the terminal server.
                </p>
              </div>
              <Row>
                <Form
                  inline
                  className="d-flex justify-content-between align-items-start w-100"
                >
                  <Col
                    md={4}
                    className="d-flex flex-column align-items-start mb-4 mr-sm-4 mb-sm-0 "
                  >
                    <FormGroup>
                      <Label for="usernameInput">Username</Label>
                      <Input
                        id="usernameInput"
                        className="w-100"
                        type="text"
                        innerRef={input => (this.usernameRef = input)}
                        invalid={this.state.usernameInvalid}
                      />
                      <FormFeedback>{this.state.usernameFeedback}</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col
                    md={4}
                    className="d-flex flex-column align-items-start mb-4 mr-sm-4 mb-sm-0"
                  >
                    <FormGroup>
                      <Label for="passwordInput">Password</Label>
                      <Input
                        id="passwordInput"
                        className="w-100"
                        type="password"
                        innerRef={input => (this.passwordRef = input)}
                        invalid={this.state.passwordInvalid}
                      />
                      <FormFeedback>{this.state.passwordFeedback}</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="w-100 bg-green-1 border-0 submit-button"
                      color="success"
                      onClick={this.login}
                    >
                      Login
                    </Button>
                  </Col>
                </Form>
              </Row>
            </CardBody>
            <CardFooter className="d-flex justify-content-center pt-5 pb-5">
              <Col md={9} className="text-center">
                <p>
                  This system is restricted to authorized users for legitimate
                  business purposes.
                </p>
                <p className="text-muted">
                  <small>
                    Information accessed by this system is considered to be
                    confidential and proprietary to Ashtead Group PLC and it’s
                    subsidiaries, and may only be used in the course of
                    conducting Company business. Use of this system is monitored
                    and recorded and unauthorized access of this system is
                    strictly prohibited. Anyone using this system expressly
                    consents to such monitoring.
                  </small>
                </p>
              </Col>
            </CardFooter>
          </Card>
        </Container>
      </div>
    );
  }
}
