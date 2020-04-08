import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

// Components
import Person from '../components/Person/Person';

// Services
import PersonService from '../services/person.service';

const UserPage = ({ match }) => {
  const [person, setPerson] = useState(null);
  const [loadMessage, setLoadMessage] = useState('Loading');
  const history = useHistory();

  const fetchData = async () => {
    try {
      setPerson((await PersonService.getPerson(match.params.id)).data);
    } catch (err) {
      setLoadMessage("Couldn't find user");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePerson = async (id) => {
    await PersonService.deletePerson(id);
    history.push('/');
  };

  const updatePerson = async (id, newName) => {
    await PersonService.updatePerson(id, { name: newName });
    fetchData();
  };

  return (
    <div style={{ width: '50%', margin: 'auto', padding: '1rem 0' }}>
      <Link to='/' className='btn'>
        Back to list
      </Link>
      <br />
      <br />
      {person !== null ? (
        <div className='card'>
          <Person
            person={person}
            deletePerson={deletePerson}
            updatePerson={updatePerson}
          />
        </div>
      ) : (
        loadMessage
      )}
    </div>
  );
};

export default UserPage;
