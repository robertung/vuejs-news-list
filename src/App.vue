<template>
  <div id="app">
      <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
      <NewsList v-bind:source="source"></NewsList>
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
      source: ''
    }
  },
  methods:{
    sourceChanged ( source ) {
        this.source = source;
    }
  }
}
</script>

<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
#app {
  font-family:Raleway,Helvetica Neue,Helvetica,Arial,sans-serif;
}

</style>
