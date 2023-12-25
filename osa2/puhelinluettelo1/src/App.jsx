// /src/App.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './components/components';
import Persons from './components/components1';
import personService from './components/components3';
import './../notification.css';
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
  
    personService.addPerson(personObject)
      .then(response => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
        setErrorMessage(`Added ${personObject.name}`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
      .catch(error => {
        console.error('Error adding person:', error);
        setErrorMessage('Error adding person');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };
  
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person?")) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
          console.log('Person deleted successfully');
          setPersons(persons.filter(person => person.id !== id));
          setErrorMessage('Person deleted successfully');
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch(error => {
          console.error('Error deleting person:', error);
          setErrorMessage('Error deleting person');
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };
  
  const Notification = ({ message }) => {
    if (message === null || message === '') {
      return null;
    }
  
    return (
      <div className="error">
        {message}
      </div>
    );
  };
  

  useEffect(() => {
    console.log('effect');
    personService.getAllPersons()
      .then(data => {
        console.log('promise fulfilled');
        setPersons(data);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
      />

      <h3>Numbers</h3>

      <Persons persons={persons}onDelete={handleDelete} />
    </div>
  );
};

export default App;
