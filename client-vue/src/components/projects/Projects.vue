<template>
  <md-layout md-row class="content">

    <h1 class="md-display-2">Scratch 1 - projekty</h1>

    <p class="md-headline">
      Poniżej znajduje się lista wszystkich projektów dostępnych w ramach tego semestru. Kliknij, aby
      zobaczyć instrukcję dla wybranego projektu.
    </p>

    <project v-if="projects.length > 0" v-for="project of projects" :project="project"/>
    <md-spinner md-indeterminate v-else="projects.length === 0"/>

  </md-layout>
</template>

<script>
  import Project from './Project';
  import getProjects from './model';

  export default {
    components: {
      project: Project,
    },
    name: 'Projects',
    created() {
      getProjects()
        .then((projects) => {
          this.projects = projects.filter(p => p.semesterId === 1);
        });
    },
    data() {
      return {
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
