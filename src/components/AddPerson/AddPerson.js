import React from 'react';

// CSS
import './AddPerson.css';

const AddPerson = ({ addPerson, name, setName }) => {
  return (
    <div className='form-group'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPerson(name);
        }}
      >
        <input
          type='text'
          placeholder='Add a person..'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='btn'>Add</button>
      </form>
    </div>
  );
};

export default AddPerson;
