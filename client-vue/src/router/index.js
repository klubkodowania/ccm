import Vue from 'vue';
import Router from 'vue-router';
import Semesters from '../components/semesters/Semesters';
import Projects from '../components/projects/Projects';
import ProjectView from '../components/projects/ProjectView';

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
      props: true,
    },
    {
      path: '/project/:id',
      name: 'ProjectView',
      component: ProjectView,
      props: true,
    },
  ],
});
