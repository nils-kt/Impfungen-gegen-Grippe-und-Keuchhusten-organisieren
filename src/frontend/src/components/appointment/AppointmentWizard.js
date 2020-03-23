import React from 'react';
import ReactWizard from 'react-bootstrap-wizard-customized';
import { api } from 'services/api'
import { 
  Container, 
  Row, 
  Col, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button, 
  Alert 
} from 'reactstrap';

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

  constructor(props) {
    super(props)
    this.state = {
      success: false,
      error: false
    }
  }

  finishButtonClick = async allStates => {
    console.log(allStates);
    const { 
      askForPregnancy, 
      validated, 
      ...data } 
      = allStates['Persönliche Daten'];
      
    const [status, res] = await api.post('/postUserData', data);
    if (status) this.setState({ success: true });
    else this.setState({ error: true });
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
              finishButtonClasses="btn-info"
            />
          </Col>
        </Row>
        <Modal isOpen={this.state.success}>
          <ModalHeader>Vielen Dank!</ModalHeader>
          <ModalBody>
            Ihren Daten wurde erfolgreich an uns übertragen...<br />

            <Alert color="info">
              ... hier würden Sie dann eine Auswertung Ihrer Eingaben sehen.
            </Alert>

            Demo Ende! 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.setState({success:false})}>Schließen</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.error}>
          <ModalHeader>Fehler!</ModalHeader>
          <ModalBody>
            Ihren Daten konnten nicht an uns übertragen werden!<br />

            <Alert color="error">
              ...Hier würden wir Ihnen dann Hilfestellung geben.
            </Alert>

            Demo Ende! 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.setState({error:false})}>Schließen</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
