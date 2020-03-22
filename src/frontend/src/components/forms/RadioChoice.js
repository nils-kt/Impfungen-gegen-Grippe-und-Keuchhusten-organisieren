import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
const lower = str => str.toLowerCase();

/**
 * Some default choices that are
 * to be overriden on duplicate keys.
 */
const defaultChoices = {
  yes: 'Ja',
  no: 'Nein'
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
  return Object.entries(choices);
};

export default props => {
  const { condition, name, onClick } = props;
  const choices = mapPropsToChoices(props);
  
  return (
    <div className="questionBorderTop">
      <span className="questionBorder">{condition}</span>
      {choices.map((choice, idx) => 
        <FormGroup key={idx} check>
          <Label check>
            <Input 
              type="radio" 
              name={name} 
              value={choice[0]}
              onClick={onClick}/> {choice[1]}
          </Label>
        </FormGroup>)}
    </div>);
};
