import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    return (
        <div className='App'>
            <Card
                firstName='Maxym'
                lastName='Zavadovych'
                age='22'
                technologies={['HTML', 'CSS', 'JavaScript', 'React']}
            />
        </div>
    );
}

export default App;
