import React from 'react';
import {
  Button,
  Form,
  Row,
  Input,
  Container,
  Card,
  CardHeader,
  CardBody,
  Col
} from 'reactstrap';
import LiveTrackLogo from '../../../assets/images/live-logo.svg';

const PhoneSystem = props => {
  // console.log(props);
  const nextPage = () => {
    props.history.push('dashboard');
  };
  return (
    <div className="phone-system">
      <Container className="m-auto bg-light-gray4 p-0">
        <Card>
          <CardHeader
            tag="div"
            className="pt-5 pb-5 d-flex align-items-center justify-content-center bg-navy"
          >
            <img className="live-logo ml-auto" src={LiveTrackLogo} alt="" />
            <a className="ml-auto text-white" href="/dashboard">
              Skip
            </a>
          </CardHeader>
          <CardBody className="p-5 bg-light-gray justify-content-center d-flex flex-column align-items-center">
            <Row className="justify-content-center pb-4">
              <Col md={7}>
                <p className="pb-3 h6 text-center">
                  Please enter your extension number and PIN you would use to
                  login to your phone. You can skip this section if this is not
                  applicate to you at this stage.
                </p>
                <Row className="justify-content-center">
                  <Col md={8}>
                    <Form
                      inline
                      className="d-flex justify-content-between align-items-end w-100"
                    >
                      <div className="p-3 w-100">
                        <Input
                          id="usernameInput"
                          className="w-100"
                          type="text"
                          placeholder="Extension Number"
                        />
                        <Input
                          id="passwordInput"
                          className="w-100 mt-3"
                          type="password"
                          placeholder="Extension PIN"
                        />
                      </div>
                      <div className="button-wrapper pt-3 w-100 mt-3 text-center">
                        <Button
                          className="bg-green-2 w-75 border-0"
                          color="success"
                          onClick={nextPage}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <p className="bold pb-3 pt-2">
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
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default PhoneSystem;
