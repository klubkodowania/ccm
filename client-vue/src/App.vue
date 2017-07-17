<template>
  <div class="app">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">Jan Kowalski</h2>

      <md-button class="md-icon-button">
        <md-icon>face</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>power_settings_new</md-icon>
      </md-button>
    </md-toolbar>

    <div class="page">

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>
<style>
  .md-card {
    max-width: 400px;
    margin-right: 24px;
    margin-bottom: 24px;
  }

  .md-display-2 {
    margin: 0;
  }

  .page {
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .content {
    max-width: 1672px;
  }

  @media (max-width: 880px) {
    .md-card {
      width: 49%;
      margin-right: 1%;
    }
  }

  @media (max-width: 600px) {
    .md-card {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
