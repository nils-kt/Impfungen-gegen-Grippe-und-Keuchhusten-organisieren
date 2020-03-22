import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

/**
 * Wraps a Input around a FormGroup component.
 * Auto-sets 'id' and 'name' attr from 'for',
 * if not provided.
 */
export default props => {
  return (
    <FormGroup>
      <Label for={props.for}>{props.as}</Label>
      <Input 
        type={props.type || 'text'} 
        name={props.name || props.for} 
        id={props.id || props.for}
        onClick={props.onClick}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyup}
        onKeyPress={props.onKeypress}>
          {props.children}
        </Input>
    </FormGroup>
  );
};
