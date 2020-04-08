import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// CSS
import './Person.css';

const Person = ({ person, deletePerson, updatePerson }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const history = useHistory();

  return (
    <div
      className='person-container'
      onClick={(e) => {
        if (!['BUTTON', 'INPUT'].includes(e.target.tagName)) {
          history.push(`/person/${person.id}`);
        }
      }}
    >
      <div className='person-name'>
        {!editing ? (
          <p>{person.name}</p>
        ) : (
          <input
            type='text'
            ref={(input) => input && input.focus()}
            placeholder={person.name}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updatePerson(person.id, newName);
                setNewName('');
                setEditing(false);
              }
            }}
          />
        )}
      </div>

      <div className='cta'>
        {!editing ? (
          <>
            <button
              className='btn'
              style={{
                fontSize: '0.7rem',
                backgroundColor: 'rgb(245, 228, 0)',
              }}
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className='btn'
              style={{
                fontSize: '0.7rem',
                backgroundColor: 'rgb(199, 13, 13)',
                color: 'white',
              }}
              onClick={() => deletePerson(person.id)}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              className='btn'
              style={{
                fontSize: '0.7rem',
                backgroundColor: 'rgb(245, 228, 0)',
              }}
              onClick={() => {
                setEditing(false);
                setNewName('');
              }}
            >
              Cancel
            </button>

            <button
              className='btn'
              style={{
                fontSize: '0.7rem',
                backgroundColor: 'rgb(89, 221, 48)',
              }}
              onClick={() => {
                updatePerson(person.id, newName);
                setNewName('');
                setEditing(false);
              }}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Person;
