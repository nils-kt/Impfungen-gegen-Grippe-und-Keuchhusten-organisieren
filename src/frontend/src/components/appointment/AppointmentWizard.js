import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReactWizard from 'react-bootstrap-wizard-customized';

import WelcomeStep from './steps/WelcomeStep';
import SecondStep from './steps/SecondStep';

const steps = [
    WelcomeStep,
    SecondStep
];

const title = 'Termin beantragen';
const description = 'xxx';

const prev = 'Zurück';
const next = 'Weiter';
const submit = 'Termin beantragen';

export default class AppointmentWizard extends React.Component {
    finishButtonClick(allStates) {
        console.log(allStates);
    }

    render() {
        return (
            <Container fluid style={{marginTop: "15px"}}>
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
