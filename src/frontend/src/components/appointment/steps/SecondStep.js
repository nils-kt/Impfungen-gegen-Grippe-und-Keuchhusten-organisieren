
import React from 'react';

export class SecondStep extends React.Component {
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

export default {
  stepName: 'second', 
  component: SecondStep
}
