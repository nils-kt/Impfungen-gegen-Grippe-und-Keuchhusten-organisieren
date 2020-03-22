
import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RadioChoice from 'components/forms/RadioChoice';
import SmartInput from 'components/forms/SmartInput';

export class UserStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      askForPregnancy: false,
      firstname: ''
    };
  
    /**
     * Get current year, eg. 2020.
     */
    this.year = new Date().getFullYear();
    /**
     * Configuration props for the
     * form elements.
     */
    this.conf = {
      minYear: 1925,
      maxYear: this.year,
      minMonth: 1,
      maxMonth: 12,
      minDay: 1,
      maxDay: 31,
      minPLZ: '00000',
      maxPLZ: '99999',
      canPregnant: ['weiblich', 'divers']
    };
  }
  
  isValidated() {
    return true;
  }

  /**
   * Gets called on gender change.
   * Checks whether selected gender
   * can be pregnant and asks for it.
   * @param {Event}
   */
  onGenderChange = ({ target: { value: gender }}) => {
    const { canPregnant } = this.conf;
    const askForPregnancy = canPregnant.includes(gender);
    this.setState({ askForPregnancy });
  }

  onBlur = (e) => {
	  this.props.
	  this.setState({firstname: e.target.value});
	  console.log(this.state.firstname);
  }
  
  render() {
    return (
      <div>
        <p>Ihre Persönlichen Daten:</p>
        <Form>
          <SmartInput 
            type="text" 
            for="firstname" 
            as="Vorname" 
            onBlur={this.onBlur}/>
          <SmartInput 
            type="text" 
            for="lastname" 
            as="Nachname" />
          <FormGroup>
            <Label for="gender">Geschlecht</Label>
            <Input 
              type="select" 
              onChange={this.onGenderChange}
              name="gender"
              id="gender">
              <option>männlich</option>
              <option>weiblich</option>
              <option>divers</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="dateofbirth">Geburtsdatum</Label>
            <Row>
              <Col lg="2">
                <Input 
                  type="number" 
                  min={this.conf.minDay}
                  max={this.conf.maxDay}
                  step="1" 
                  placeholder="Tag"
                  name="day" 
                  id="day" />
              </Col>
              <Col lg="2">
                <Input 
                  type="number" 
                  min={this.conf.minMonth}
                  max={this.conf.maxMonth}
                  step="1"
                  placeholder="Monat"
                  name="month" 
                  id="month" />
              </Col>
              <Col lg="3">
                <Input 
                  type="number" 
                  min={this.conf.minYear}
                  max={this.conf.maxYear} 
                  step="1"
                  defaultValue={this.conf.maxYear}
                  placeholder="Jahr"
                  name="year" 
                  id="year" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col lg="3">
                <Label for="postcode">Postleitzahl</Label>
                <Input 
                  type="number" 
                  min={this.conf.minPLZ}
                  max={this.conf.maxPLZ}
                  step="1" 
                  placeholder="PLZ"
                  name="postcode" 
                  id="postcode" />
              </Col>
              <Col lg="5">
                { this.state.askForPregnancy && 
                  <RadioChoice
                    name="pregnancy"
                    condition="Sind Sie schwanger?"
                    choiceYes="Ja"
                    choiceNo="Nein"
                    choiceMaybe="Weiß nicht" /> }
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>);
  }
}

export default {
  stepName: 'Persönliche Daten',
  component: UserStep
}
