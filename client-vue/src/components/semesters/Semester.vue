<template>
  <md-card>
    <md-card-area>
      <md-card-media>
        <img
          src="https://images.contentful.com/livad5mzealc/3Df0EBA6hq0SMm4eMusiOg/d9694349a15be6f0a712323952f45eae/card_scratch.png"
          alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">
          {{semester.title}}
        </div>
        <div class="md-subhead">
          {{semester.summary}}
        </div>
      </md-card-header>

      <md-card-content>
        {{semester.description}}
      </md-card-content>
    </md-card-area>

    <md-card-actions>
      <md-button class="md-primary" :href="'#/projects/' + semester.id">Zobacz projekty</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  export default {
    name: 'semester',
    props: ['semester'],
  };
</script>
