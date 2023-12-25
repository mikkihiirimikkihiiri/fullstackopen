// /src/components/Persons/Persons.jsx
import React from 'react';
import Person from '../components/components2';

const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <Person key={`person-${index}`} person={person} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Persons;