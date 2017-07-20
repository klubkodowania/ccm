import axios from 'axios';

let projects = null;

export default function getProjects() {
  return projects
    ? getProjectsFromStore()
    : fetchProjects()
      .then(storeProjects);
}

function getProjectsFromStore() {
  return Promise.resolve([...projects]);
}

function fetchProjects() {
  return axios.get('/static/api/projects.json');
}

function storeProjects(fetchedSemesters) {
  projects = fetchedSemesters.data;
  return getProjectsFromStore();
}
