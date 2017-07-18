<template>
  <md-layout md-column class="project">
    <h1 class="md-display-2">Robot gaduła</h1>

    <div class="project-instruction" v-html="content"/>
  </md-layout>
</template>

<script>
  import marked from 'marked';

  export default {
    name: 'project',
    data() {
      return {
        msg: `# Introduction { .intro }

You are going to learn how to make a game, in which you'll use the mouse to navigate a boat to a desert island.

<div class="scratch-preview">
  <iframe allowtransparency="true" width="485" height="402" src="http://scratch.mit.edu/projects/embed/63957956/?autostart=false" frameborder="0"></iframe>
  <img src="boat-final.png">
</div>

# Step 1: Planning your game { .activity }

## Activity Checklist { .check }


+ Start a new Scratch project, and delete the cat sprite so that your project is empty. You can find the online Scratch editor at <a href="http://jumpto.cc/scratch-new">jumpto.cc/scratch-new</a>.

+ Click on your stage backdrop and plan out your level. You should add:
+ Wood that your boat has to avoid;
+ A desert island that your boat has to get to.

Here's how your game could look:

![screenshot](boat-bg.png)

# Step 2: Controlling the boat { .activity }`,
      };
    },
    computed: {
      content() {
        return marked(this.msg.replace(/{\s\.\w+\s}/ig, ''));
      },
    },
  };
</script>
