<template>
  <md-card class="is-done">
    <md-card-area>
      <md-card-media>
        <img
          src="https://images.contentful.com/livad5mzealc/3Df0EBA6hq0SMm4eMusiOg/d9694349a15be6f0a712323952f45eae/card_scratch.png"
          alt="People">
      </md-card-media>

      <md-card-header>
        <h3 class="md-title"><md-icon class="check-icon">check_circle</md-icon> Robot gaduła</h3>
      </md-card-header>

    </md-card-area>

    <md-card-actions>
      <md-button class="  md-secondary">Materiały</md-button>
      <md-button class="  md-primary">Instrukcja</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  export default {
    name: 'project',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
