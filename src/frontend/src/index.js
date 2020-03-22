import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React Bootstrap (4.4)
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-wizard-customized/dist/react-wizard.css';

// Custom Style
import 'resources/css/style.css';

// Fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
    <App/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
