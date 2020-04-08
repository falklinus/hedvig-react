import React, { useState, useEffect } from 'react';

//Components
import PeopleList from '../components/PeopleList/PeopleList';
import AddPerson from '../components/AddPerson/AddPerson';

//Services
import PersonService from '../services/person.service';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const fetchData = async () => {
    setPeople((await PersonService.getAllPeople()).data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addPerson = async (name) => {
    await PersonService.addPerson({ name });
    setName('');
    fetchData();
  };

  const deletePerson = async (id) => {
    await PersonService.deletePerson(id);
    fetchData();
  };

  const updatePerson = async (id, newName) => {
    await PersonService.updatePerson(id, { name: newName });
    fetchData();
  };
  return (
    <>
      <AddPerson addPerson={addPerson} name={name} setName={setName} />
      <PeopleList
        people={people}
        deletePerson={deletePerson}
        updatePerson={updatePerson}
      />
    </>
  );
};

export default Home;
