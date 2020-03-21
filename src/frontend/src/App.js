import React from 'react';

// Bootstrap components
import {Alert} from 'react-bootstrap';

function App() {
    const test = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
    ));
    return (
        <div className="App">
            {test}
        </div>
    );
}

export default App;
