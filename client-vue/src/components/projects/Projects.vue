<template>
  <md-layout md-row class="content">

    <h1 class="md-display-2">{{semester.title}} - projekty</h1>

    <p class="md-headline">
      {{semester.description}}
    </p>

    <project-card v-if="projects.length > 0" v-for="project of projects" :project="project"/>
    <md-spinner md-indeterminate v-else="projects.length === 0"/>

  </md-layout>
</template>

<script>
  import ProjectCard from './ProjectCard';
  import getProjects from './model';
  import getSemester from '../semesters/model';

  export default {
    components: {
      'project-card': ProjectCard,
    },
    props: ['name'],
    name: 'Projects',
    created() {
      getProjects()
        .then((projects) => {
          this.projects = projects.filter(p =>
            p.semesterId.toString().toLowerCase() === this.name.toString().toLowerCase());
        });

      getSemester()
        .then((semesters) => {
          this.semester = semesters.find(s =>
            s.id.toString().toLowerCase() === this.name.toString().toLowerCase());
        });
    },
    data() {
      return {
        semester: {},
        projects: [],
      };
    },
  };
</script>

<style scoped>
  .check-icon {
    float: left;
    margin: 3px 10px 0 0;
    opacity: 0.5;
  }

  .is-done .check-icon {
    color: #4CAF50;
    opacity: 1;
  }

  .is-done .md-title {
    color: #4CAF50;
  }

  .md-card {
    width: 360px;
  }
</style>
