import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap components
import {Alert, Container, Row, Col} from 'reactstrap';

// react-bootstrap-wizard-v2
import ReactWizard from 'react-bootstrap-wizard';

function App() {
    class FirstStep extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstStep: "first step here"
            };
        }

        isValidated() {
            return true;
        }

        render() {
            return <div>Schritt eins</div>;
        }
    }

    class SecondStep extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                secondStep: "second step here"
            };
        }

        isValidated() {
            return true;
        }

        render() {
            return <div>Schritt zwei</div>;
        }
    }

    class ThirdStep extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                thirdStep: "third step here"
            };
        }

        isValidated() {
            return true;
        }

        render() {
            return <div>Schritt drei</div>;
        }
    }

    var steps = [
        // this step hasn't got a isValidated() function, so it will be considered to be true
        {stepName: "First", component: FirstStep},
        // this step will be validated to false
        {stepName: "Second", component: SecondStep},
        // this step will never be reachable because of the seconds isValidated() steps function that will always return false
        {stepName: "Third", component: ThirdStep}
    ];

    class WizardExample extends React.Component {
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
                                title="Termin beantragen"
                                description=""
                                headerTextCenter
                                validate
                                color="primary"
                                finishButtonClick={this.finishButtonClick}
                                previousButtonText="Zurück"
                                nextButtonText="Weiter"
                                finishButtonText="Termin beantragen"
                            />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    return ReactDOM.render(<WizardExample/>, document.getElementById("root"));
}

export default App;
