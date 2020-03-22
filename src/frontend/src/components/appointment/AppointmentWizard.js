import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWizard from 'react-bootstrap-wizard-customized';

import WelcomeStep from './steps/WelcomeStep';
import UserStep from './steps/UserStep';
import SurveyStep from './steps/SurveyStep';

const steps = [
  WelcomeStep,
  UserStep,
  SurveyStep
];

const title = 'Impflex - Portal';
const description = 'Termin beantragen';

const prev = 'Zurück';
const next = 'Weiter';
const submit = 'Termin beantragen';

export default class AppointmentWizard extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }

  render() {
    return (
      <Container fluid style={{ marginTop: "15px", marginBottom: "15px"}}>
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              title={title}
              description={description}
              headerTextCenter
              headerTextColor="#fff"
              validate
              color="primary"
              finishButtonClick={this.finishButtonClick}
              previousButtonText={prev}
              nextButtonText={next}
              finishButtonText={submit}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
