import Vue from 'vue';
import Router from 'vue-router';
import Semesters from '../components/Semesters';
import Semester from '../components/Semester';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Semesters',
      component: Semesters,
    },
    {
      path: '/semester/:name',
      name: 'Semester',
      component: Semester,
    },
  ],
});
