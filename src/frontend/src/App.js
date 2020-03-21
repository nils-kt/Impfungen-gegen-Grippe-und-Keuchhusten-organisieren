import React from 'react';
import ReactDOM from 'react-dom';

import AppointmentWizard from 'components/appointment/AppointmentWizard'

function App() {
    return ReactDOM.render(
        <AppointmentWizard/>,
        document.getElementById("root"));
}

export default App;
