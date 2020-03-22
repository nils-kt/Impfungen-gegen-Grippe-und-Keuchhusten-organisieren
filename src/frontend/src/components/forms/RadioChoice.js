import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
const lower = str => str.toLowerCase();

/**
 * Some default choices that are
 * to be overriden on duplicate keys.
 */
const defaultChoices = {
  yes: 'Yes',
  no: 'No',
  maybe: 'Maybe'
};

/**
 * Prop ident for choices.
 * @format identKey
 * @example choiceYes
 */
const ident = 'choice';
const hasIdent = new RegExp(`^${ident}[A-Z]{1}\\w*`);
/**
 * Maps and merges props of ${ident}* 
 * to choices object.
 * Transforms key to lowercase.
 * @author Steven Agyekum <Burnett01>
 * @param {Object} props 
 * @returns {Array}
 */
const mapPropsToChoices = props => {
  let choices = { ...defaultChoices };
  for (const prop in props) {
    if (!hasIdent.test(prop)) continue;
    const key = lower(prop.replace(ident, ''));
    const val = props[prop];
    choices = { ...choices, ...{[key]: val}};
  }
  return Object.values(choices);
};

export default props => {
  const { condition, name } = props;
  const choices = mapPropsToChoices(props);
  return (
    <div>
      {condition}
      {choices.map((choice, idx) => 
        <FormGroup key={idx} check>
          <Label check>
            <Input type="radio" name={name} /> {choice}
          </Label>
        </FormGroup>)}
    </div>);
};
