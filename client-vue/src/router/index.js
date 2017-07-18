import Vue from 'vue';
import Router from 'vue-router';
import Semesters from '../components/semesters/Semesters';
import Semester from '../components/semester/Semester';

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
