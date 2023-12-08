import Person from './components2'; 
const Persons = ({ persons, numbers }) => {
    return (
      <div>
        {persons.map((person, index) => (
          <Person key={`person-${index}`} person={person} number={numbers[index]} />
        ))}
      </div>
    );
  };
  export default Persons;