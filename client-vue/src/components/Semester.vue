<template>
  <md-layout md-row class="content">

    <h1 class="md-display-2">Scratch 1 - projekty</h1>

    <p class="md-headline">
      Poniżej znajduje się lista wszystkich projektów dostępnych w ramach tego semestru. Kliknij, aby
      zobaczyć instrukcję dla wybranego projektu.
    </p>

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

    <md-card>
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

    <md-card>
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

    <md-card>
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

    <md-card>
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

  </md-layout>
</template>

<script>
  export default {
    name: 'Semester',
    data() {
      return {
        data: [1, 2, 3, 4, 5, 6, 7],
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
