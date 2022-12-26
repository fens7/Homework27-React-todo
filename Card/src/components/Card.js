import React, { useState } from 'react';
import './Card.css';

function Card({ firstName, lastName, age, technologies }) {
    const [value, setValue] = useState('');
    const [techs, setTechs] = useState([]);

    function addTech(input) {
        if (input) {
            setTechs([...techs, value]);
        }
    }

    function handlerSubmit(e) {
        e.preventDefault();
        addTech(value);
        setValue('');
    }

    function handlerChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className='card__container'>
            <h1 className='card-user__name'>
                {firstName} {lastName}
            </h1>

            <h3 className='card-user__age'>Age: {age}</h3>
            <form action='#' onSubmit={handlerSubmit}>
                <input
                    value={value}
                    onChange={handlerChange}
                    type='text'
                    placeholder='Type new technology...'
                />
                <button onClick={handlerSubmit}>Add Technology</button>
            </form>
            <h4 className='card-user__technologies'>
                Technologies:{' '}
                {techs.map((tech) => (
                    <div key={tech}>{tech}</div>
                ))}
            </h4>
        </div>
    );
}

export default Card;
