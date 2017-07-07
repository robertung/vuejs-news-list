<template>
<div class="header">
  <div class="sourceselection">
      <div class="container">
        <div class="jumbotron">
          <h1><span class="glyphicon glyphicon-list-alt"></span> Live News List</h1>
          <h4>Select News Dropdown</h4>
          <select class="form-control" v-on:change="sourceChanged">
            <option value="">Select your news poison ...</option>
            <option v-bind:value="source.id" v-for="source in sources">{{ source.name }}</option>
          </select>

          <div v-if="source">
            <h6>{{source.description}}</h6>
            <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website</a>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'sourceselection',
  data () {
    return {
      sources: [],
      source: ''
    }
  },
  methods: {
    sourceChanged : function (e) {
      for( var i = 0; i < this.sources.length; i++ ){
        if( this.sources[i].id == e.target.value ){
            this.source = this.sources[i];
        }
      }
      // ^ iterate my sources list from API news below.
      this.$emit('sourceChanged', e.target.value );
    }
  },
  created: function () {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then( response => {
        this.sources = response.data.sources;
        // console.log(this.sources.length);
        // Store sources array here in a object
      });
  }
}
</script>
<style>
.jumbotron{
  background:none;
  color:#fff !important;
}
.header{
  background:#5cc7b2;
}
h1{
  font-weight: normal;
}
</style>
