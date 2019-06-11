<template>
  <div class="wrapper blog-posts">
      <div class="page-header page-header-small">
          <parallax class="page-header-image" style="background-image: url('img/bg44.jpg') ;">
          </parallax>
          <div class="content-center">
              <div class="row">
                  <div class="col-md-8 ml-auto mr-auto text-center">
                      <h2 class="title">BLAVITY A CREATIVE COMMUNITY FOR BLACK MILLENNIALS</h2>
                      <a href="#button" class="btn btn-primary btn-round  btn-icon">
                          <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#button" class="btn btn-primary btn-round  btn-icon">
                          <i class="fab fa-instagram"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    <div class="wrapper starter-page d-flex justify-content-center align-items-center">
      <div
        v-if="! hasArticles"
      >
        <h1>
          Loading Articles ....
        </h1>
      </div>
      <div class="container col-12">
        <div
          v-for="article in articles"
          class = "row"
        >
        <div class="col mx-4">
          <h1 class="text-center" v-html="article.title.rendered"
          ></h1>
          <div class="col mx-4">
            <div
              class="row"
              v-html="article.content.rendered"></div>
          </div>
          <hr/>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name: 'home',
    data : ()=>({
      articles: [],
      hasArticles: false
    }),
    async created () {
      const response = await axios.get('https://progressandfortune.com/blavity-wp-yest/wp-json/wp/v2/posts')
      const articles = response.data
      this.articles = articles
      this.hasArticles = true
    }
  }
</script>
<style scoped>
    .starter-page {
      flex-direction: column;
        min-height: calc(100vh - 79px);
        max-width: 100vw;
    }
</style>
