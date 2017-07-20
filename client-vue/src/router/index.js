import Vue from 'vue';
import Router from 'vue-router';
import Semesters from '../components/semesters/Semesters';
import Projects from '../components/projects/Projects';
import Project from '../components/project/Project';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Semesters',
      component: Semesters,
    },
    {
      path: '/projects/:name',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/project/:name',
      name: 'Project',
      component: Project,
    },
  ],
});
