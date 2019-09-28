<template>
  <div id="app" class="container" style="margin-top: 15px;">
    <div slot="loading">Loading repositories</div>
    <div  class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <article class="media" v-for="(repo,index) in repos" :key="index">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="repo.owner.avatar_url" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ repo.full_name }}</strong>
                <small>
                  <i class="fa fa-star"></i>
                  {{ repo.stargazers_count }}
                </small>
                <br />
                {{ repo.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
const fecth = require("node-fetch");
export default {
  name: "lista",
  data() {
    return {
      repos: ""
    };
  },
  created() {
    fecth("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data=>console.log(data))
  }
};
</script>