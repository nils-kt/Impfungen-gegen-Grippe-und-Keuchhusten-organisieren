
import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RadioChoice from 'components/forms/RadioChoice';
import SmartInput from 'components/forms/SmartInput';

export class SurveyStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    /**
     * Configuration props for the
     * form elements.
     */
    this.conf = {
    };
  }
  
  isValidated() {
    return true;
  }

  render() {
    return (
      <div>
        <p>Bitte beantworten Sie die folgenden Fragen:</p>
        <Form>
          <Row>
            <Col lg="4">
              <RadioChoice
                name="smoking"
                condition="Rauchen Sie?"/>
            </Col>
            <Col lg="4">
              <RadioChoice
                name="precondition"
                condition="Sind Sie vorerkrankt?"/>
            </Col>
            <Col lg="4">
              <RadioChoice
                name="steven"
                condition="Ist Steven gut?"
                choiceYes="Aber sicher doch!"
                choiceNo="Nö!!"
                choiceMaybe="Naja.."
                choiceTest="Test Test"/>
            </Col>
          </Row>
        
        </Form>
      </div>);
  }
}

export default {
  stepName: 'Fragebogen',
  component: SurveyStep
}
