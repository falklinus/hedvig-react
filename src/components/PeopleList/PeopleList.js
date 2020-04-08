import React from 'react';
import Person from '../Person/Person';

// CSS
import './PeopleList.css';

const PeopleList = ({ people, deletePerson, updatePerson }) => {
  return (
    <div className='list-container'>
      {people.map((person) => (
        <div className='card card-bounce' key={person.id}>
          <Person
            person={person}
            deletePerson={deletePerson}
            updatePerson={updatePerson}
          />
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
