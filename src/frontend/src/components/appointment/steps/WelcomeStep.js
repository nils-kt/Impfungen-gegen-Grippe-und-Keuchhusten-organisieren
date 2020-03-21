
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
    return <p>
    			Willkommen,<br />
    			auf dieser Seite können Sie einen Impftermin in einer der nächstgelegenen Arztpraxis buchen. 
    			Außerdem werden Ihnen Fragen zu Ihrem Anliegen gestellt. Daraus kann ermittelt werden, ob Sie ein Risikopatient sind oder nicht. 
    			Wie müssen Sie vorgehen?
    					<br />
    					<br /><b>1. Geben Sie Ihren Namen und Ihre E-Mail-Adresse an.</b>
    					<br /><b>2. Beantworten Sie die Fragen.</b>
    					<br /><b>3. Drücken Sie auf den Button 'Termin beantragen' unten rechts, um einen Termin zu bekommen.</b>
    					<br />
    					<br />Sie erhalten eine E-Mail mit Daten wann Sie wo zu erscheinen haben Bleiben Sie gesund>
    		</p>;
  }
}

export default {
  stepName: 'first', 
  component: WelcomeStep
}
