<template>
  <md-card>
    <md-card-area>
      <md-card-media>
        <img
          src="https://images.contentful.com/livad5mzealc/3Df0EBA6hq0SMm4eMusiOg/d9694349a15be6f0a712323952f45eae/card_scratch.png"
          alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Scratch 1</div>
        <div class="md-subhead">Pierwszy semestr nauki programowania w Scratchu</div>
      </md-card-header>

      <md-card-content>
        W pierwszym semestrze znajdziesz 8 projektów, podczas których poznasz podstawy
        Scratcha, dowiesz się czym są duszki, skrypty, kostiumy, do czego służą zmienne
        i jak napisać swoją pierwszą grę.
      </md-card-content>
    </md-card-area>

    <md-card-actions>
      <md-button class="md-primary" href="#/semester/scratch-1">Zobacz projekty</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  export default {
    name: 'semester',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
