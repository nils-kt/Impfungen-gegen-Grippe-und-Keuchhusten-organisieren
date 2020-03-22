import React from 'react';
import { 
  Form, 
  FormGroup,
  FormFeedback,
  Label, 
  Input, 
  Row, 
  Col 
} from 'reactstrap';
import RadioChoice from 'components/forms/RadioChoice';
import { StateValidator } from 'components/StateValidator'

export class UserStep extends StateValidator {
  constructor(props) {
    super(props);
    /**
     * The component state.
     */
    this.state = {
      askForPregnancy: false,
      firstname: '',
      lastname: '',
      gender: 'male',
      dateofbirth: '',
      postcode: '',
      pregnancy: ''
    };
    /**
     * Get current year, eg. 2020.
     */
    this.year = new Date().getFullYear();
    /**
     * Configuration props for the form elements.
     */
    this.conf = {
      minStrLen: 4,
      maxStrLen: 50,
      minPLZ: '00000',
      maxPLZ: '99999',
      canPregnant: ['female', 'diverse']
    };
    /**
     * Rules setup for validation.
     */
    this.validationRules({
      firstname: { 
        minLen: this.conf.minStrLen,
        maxLen: this.conf.maxStrLen,
      },
      lastname: { 
        minLen: this.conf.minStrLen,
        maxLen: this.conf.maxStrLen,
      },
      gender: { 
        has: ['male', 'female', 'diverse'],
      },
      dateofbirth: {
        regex: /^\d{4}-\d{2}-\d{2}$/
      },
      postcode: {
        len: 5
      },
      pregnancy: {
        notIf: [{ field: 'gender', value: 'male' }],
        has: ['yes', 'no', 'maybe'],
      },
    })
  }
  /**
   * UI-binding to JSX for visual validation.
   */
  validateUI = name => {
    const state = this.state.validated[name];
    return { 
      invalid: (state != null && !state), 
      valid: state
    };
  }
  /**
   * Wizard method for checking if all
   * validations have passed truthy.
   */
  isValidated() {
    const props = this.state.validated;
    let invalid = false;
    for (const prop in props) {
      if (this.validateState(prop)) continue;
      invalid = true;
    }
    return !invalid;
  }
  /**
	 * onChange event handler.
	 * 
	 * @param {Event}
   * @async
	 */
  onChange = async ({ target: { name, value }}) => {
    /** Handle UI state for pregnancy element. */
    const { canPregnant } = this.conf;
    const askForPregnancy = canPregnant.includes(value);
    await this.setState({ askForPregnancy });
    /** Set regular state */
    this.setStateValidate(name, value)
  }
  /**
	 * onBlur event handler.
	 * 
	 * @param {Event}
	 */
  onBlur = ({ target: { name, value }}) =>
    this.setStateValidate(name, value);
  /**
	 * onClick event handler.
	 * 
	 * @param {Event}
	 */
  onClick = ({ target: { name, value }}) =>
    this.setStateValidate(name, value);
  /**
   * Render method.
   */
  render() {
    return (
      <div>
        <p>Ihre Persönlichen Daten:</p>
        <Form>
          <FormGroup>
            <Label for="firstname">Vorname</Label>
            <Input
              type="text" 
              onBlur={this.onBlur}
              name="firstname"
              id="firstname" 
              {...this.validateUI('firstname')}
              />
              <FormFeedback>
                Ein Text zwischen {this.conf.minStrLen} und {this.conf.maxStrLen} Zeichen
              </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Nachname</Label>
            <Input
              type="text" 
              onBlur={this.onBlur}
              name="lastname"
              id="lastname"
              {...this.validateUI('lastname')}
              />
              <FormFeedback>
                Ein Text zwischen {this.conf.minStrLen} und {this.conf.maxStrLen} Zeichen
              </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="gender">Geschlecht</Label>
            <Input 
              type="select" 
              onChange={this.onChange}
              name="gender"
              id="gender"
              {...this.validateUI('gender')}>
              <option value="male">männlich</option>
              <option value="female">weiblich</option>
              <option value="diverse">divers</option>
            </Input>
            <FormFeedback>
              Nur männlich, weiblich oder divers
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="dateofbirth">Geburtsdatum</Label>
            <Input 
              type="date" 
              name="dateofbirth" 
              id="dateofbirth"
              onBlur={this.onBlur}
              {...this.validateUI('dateofbirth')}/>
              <FormFeedback>
                Geburtsdatum muss im Format TT.MM.JJJJ sein
              </FormFeedback>
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
                  id="postcode"
                  onBlur={this.onBlur}
                  {...this.validateUI('postcode')}/>
                  <FormFeedback>
                    Eine Zahl zwischen {this.conf.minPLZ} und {this.conf.maxPLZ}
                  </FormFeedback>
              </Col>
              <Col lg="5">
                { this.state.askForPregnancy && 
                  <RadioChoice
                    condition="Sind Sie schwanger?"
                    choiceYes="Ja"
                    choiceNo="Nein"
                    choiceMaybe="Weiß nicht"
                    name="pregnancy"
                    onClick={this.onClick}/>}
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
