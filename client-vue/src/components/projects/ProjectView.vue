<template>
  <md-layout md-column class="project">
    <h1 class="md-display-2">{{project.title}}</h1>

    <div class="project-instruction" v-html="content"/>
  </md-layout>
</template>

<script>
  import marked from 'marked';
  import getProjects from './model';

  export default {
    name: 'ProjectView',
    props: ['id'],
    created() {
      getProjects()
        .then((projects) => {
          this.project = projects.find(p =>
            p.id.toString().toLowerCase() === this.id.toString().toLowerCase());
        });
    },
    data() {
      return {
        project: {},
      };
    },
    computed: {
      content() {
        return this.project.description
          ? marked(this.project.description.replace(/{\s\.\w+\s}/ig, ''))
          : '';
      },
    },
  };
</script>
