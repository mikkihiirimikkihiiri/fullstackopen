// /src/services/api.js
import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAllPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addPerson = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const personService = {
  getAllPersons,
  addPerson,
};

export default personService;
