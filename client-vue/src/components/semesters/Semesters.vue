<template>
  <md-layout md-column class="content">

    <h1 class="md-display-2">Semestry</h1>

    <p class="md-headline">
      Poniżej znajduje się lista dostępnych dla Ciebie semestrów. Wybierz jeden z nich
      aby zobaczyć, jakie projekty możesz zrealizować.
    </p>

    <md-layout :md-gutter="24">

      <semester v-for="semester of semesters"/>

    </md-layout>

  </md-layout>
</template>

<script>
  import Semester from './Semester';

  export default {
    components: {
      semester: Semester,
    },
    name: 'semesters',
    data() {
      return {
        semesters: [1, 2, 3, 4],
      };
    },
  };
</script>
