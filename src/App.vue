<template>
  <div id="app">
    <!-- <div class="container"> -->
      <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
      <NewsList v-bind:source="source"></NewsList>
    <!-- </div> -->
  </div>
</template>

<script>
import SourceSelection from './components/SourceSelection'
import NewsList from './components/NewsList'

export default {
  name: 'app',
  components: {
    SourceSelection,
    NewsList
  },
  data() {
    return {
      source: "",
    }
  },
  methods:{
    sourceChanged: function ( source ) {
        this.source = source;
    }
  }
}
</script>

<style>
#app {
  font-family:Raleway,Helvetica Neue,Helvetica,Arial,sans-serif;
  /*padding:20px 0 0;*/
}

</style>
