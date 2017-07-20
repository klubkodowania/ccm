import axios from 'axios';

let semesters = null;

export default function getSemesters() {
  return semesters
    ? getSemestersFromStore()
    : fetchSemesters()
      .then(storeSemesters);
}

function getSemestersFromStore() {
  return Promise.resolve([...semesters]);
}

function fetchSemesters() {
  return axios.get('/static/api/semesters.json');
}

function storeSemesters(fetchedSemesters) {
  semesters = fetchedSemesters.data;
  return getSemestersFromStore();
}
