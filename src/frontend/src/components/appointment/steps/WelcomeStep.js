
import React from 'react';

export class WelcomeStep extends React.Component {
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

export default {
  stepName: 'first', 
  component: WelcomeStep
}
