<template>
  <md-layout md-column class="content">

    <h1 class="md-display-2">Semestry</h1>

    <p class="md-headline">
      Poniżej znajduje się lista dostępnych dla Ciebie semestrów. Wybierz jeden z nich
      aby zobaczyć, jakie projekty możesz zrealizować.
    </p>

    <md-layout :md-gutter="24">

      <semester v-if="semesters.length > 0" v-for="semester of semesters" :semester="semester" />
      <md-spinner md-indeterminate v-else="semesters.length === 0"/>

    </md-layout>

  </md-layout>
</template>

<script>
  import Semester from './Semester';
  import getSemesters from './model';

  export default {
    components: {
      semester: Semester,
    },
    name: 'semesters',
    created() {
      getSemesters()
        .then((semesters) => {
          this.semesters = semesters;
        });
    },
    data() {
      return {
        semesters: [],
      };
    },
  };
</script>
