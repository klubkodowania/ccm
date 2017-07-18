<template>
  <md-layout md-row class="content">

    <h1 class="md-display-2">Scratch 1 - projekty</h1>

    <p class="md-headline">
      Poniżej znajduje się lista wszystkich projektów dostępnych w ramach tego semestru. Kliknij, aby
      zobaczyć instrukcję dla wybranego projektu.
    </p>

    <project v-for="project of projects" />

  </md-layout>
</template>

<script>
  import Project from './Project';

  export default {
    components: {
      project: Project,
    },
    name: 'Semester',
    data() {
      return {
        projects: [1, 2, 3, 4, 5, 6, 7],
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
