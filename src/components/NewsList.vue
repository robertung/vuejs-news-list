<template>
  <div class="newslist">
    <div class="loader-wrapper" v-show="loader">
      <h2>Loading News...</h2>
      <img class="spinner" src="static/Spinner.svg">
    </div>
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  props: ['source'],
  data () {
    return {
      articles: [],
      loader: null
    }
  },
  methods: {
    updateSource (source) {
      this.loader = true;
      return this.axios.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=e67adf5ff6794072b71ad461f55f6177')
       .then(response => {
         this.articles = response.data.articles;
         this.loader = false;
       });
    }
  },
  watch: {
    source (val) {
      this.updateSource(val);
    }
  }
}
</script>

<style scoped>
  .loader-wrapper{
    text-align: center;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.7);
  }
  .spinner {
    width:100px;
    margin:0 0 0 -1px;
  }
  h2{
    color:#ccc;
  }
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>
