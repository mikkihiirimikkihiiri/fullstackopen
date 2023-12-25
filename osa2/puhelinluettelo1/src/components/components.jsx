// /src/components/PersonForm/PersonForm.jsx
import React from 'react';

const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber, persons }) => {
  return (
    <form
      onSubmit={(e) => {
        addPerson(e);
      }}
    >
      <div>
        name:{' '}
        <input
          value={newName}
          onChange={(e) =>
            persons.map((person) => person.name).includes(e.target.value)
              ? alert(`${e.target.value} is already added to phonebook`)
              : setNewName(e.target.value)
          }
        />
      </div>
      <div>
        number:{' '}
        <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

