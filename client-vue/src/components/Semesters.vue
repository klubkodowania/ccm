<template>
  <md-layout md-column class="content">

    <h1 class="md-display-2">Semestry</h1>

    <p class="md-headline">
      Poniżej znajduje się lista dostępnych dla Ciebie semestrów. Wybierz jeden z nich
      aby zobaczyć, jakie projekty możesz zrealizować.
    </p>

    <md-layout :md-gutter="24">

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
          <md-button class="  md-primary">Zobacz projekty</md-button>
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
            <div class="md-title">Scratch 2</div>
            <div class="md-subhead">Drugi semestr nauki programowania w Scratchu</div>
          </md-card-header>

          <md-card-content>
            W pierwszym drugim semestrze znajdziesz 7 projektów. Nauczysz się
            w jaki sposób przygotować bardziej zaawansowane gry i aplikacje, które posiadaję ekrany startowe,
            menu, podliczanie punktów i zapisywanie najlepszego wyniku.
          </md-card-content>
        </md-card-area>

        <md-card-actions>
          <md-button class="  md-primary">Zobacz projekty</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-area>
          <md-card-media>
            <img
              src="https://images.contentful.com/livad5mzealc/4wVezL6qYwCQMSOocuK4Qa/69d610a5e5d3caafdf44c18cc1d8202c/card_html.png"
              alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">HTML & CSS</div>
            <div class="md-subhead">Podstawy HTML i CSS, które pozwolą Ci tworzyć strony www</div>
          </md-card-header>

          <md-card-content>
            HTML i CSS to fundamenty stron www, z których korzystasz codziennie! W tym semestrze nauczysz się,
            jak stworzyć swoją własną stronę internetową i sprawić, by wyglądała dokładnie tak jak tego zechcesz.
          </md-card-content>
        </md-card-area>

        <md-card-actions>
          <md-button class="  md-primary">Zobacz projekty</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-area>
          <md-card-media>
            <img
              src="https://images.contentful.com/livad5mzealc/6OeqQbTfryeqMAMIC0Q8Mo/0cc41cd96313e3404098d9713d22895e/card_python.png"
              alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">Python</div>
            <div class="md-subhead">Twoje pierwsze kroki z językiem programowania Python</div>
          </md-card-header>

          <md-card-content>
            Python to pełnoprawny język programowania, dzięki któremu programiści na całym świecie tworzą
            różnorakie oprorgamowanie. W tym semestrze dowiesz się, jak opanować podstawy tego języka, co będzie
            doskonałym wstępem do dalszej przygody z profesjonalnym programowaniem.
          </md-card-content>
        </md-card-area>

        <md-card-actions>
          <md-button class="  md-primary">Zobacz projekty</md-button>
        </md-card-actions>
      </md-card>

    </md-layout>

  </md-layout>
</template>

<script>
  export default {
    name: 'semesters',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
