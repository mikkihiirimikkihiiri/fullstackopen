import React, { useState } from 'react';
import PersonForm from './components/components';
import Persons from './components/components1';
import Person from './components/components2';



const App = () => {
  const [persons, setPersons] = useState([{ name: 'a' }]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState([{ number: 0 }]);
  const [newnumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName('');
  };

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      number: newnumber,
      id: number.length + 1,
    };

    setNumber(number.concat(numberObject));
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonForm
        addPerson={addPerson}
        addNumber={addNumber}
        newName={newName}
        setNewName={setNewName}
        newnumber={newnumber}
        setNewNumber={setNewNumber}
        persons={persons}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} numbers={number} />
    </div>
  );
};

export default App;
