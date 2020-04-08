import Api from './api';

export default {
  getAllPeople() {
    return Api().get('person');
  },
  addPerson(person) {
    return Api().post('person', person);
  },
  deletePerson(id) {
    return Api().delete(`person/${id}`);
  },
  updatePerson(id, person) {
    return Api().put(`person/${id}`, person);
  },
  getPerson(id) {
    return Api().get(`person/${id}`);
  },
};
