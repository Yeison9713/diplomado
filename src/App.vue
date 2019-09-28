<template>
  <div id="app" class="container">
    <h1>Vue and Firebase</h1>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Add A Link</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addLink" class="form-inline">
          <div class="row">
            <div class="col">
              <label for>Title</label>
              <input type="text" v-model="newLink.title" class="form-control" placeholder="Title" />
            </div>
            <div class="col">
              <label for>Autor</label>
              <input type="text" v-model="newLink.autor" class="form-control" placeholder="Autor" />
            </div>
            <div class="col">
              <label for>Url</label>
              <input type="text" v-model="newLink.url" class="form-control" placeholder="Url" />
            </div>
          </div>
          <div class="col">
            <label for>Add</label>
            <input type="submit" class="btn btn-success" value="Add A Link" />
          </div>
        </form>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Links List</h3>
      </div>
      <div class="card-body" id="container-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <td>Title</td>
              <td>User</td>
              <td>Url</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="link in links" v-bind:key="link['key']">
              <td>
                <a href>{{link.title}}</a>
              </td>
              <td>
                <a href>{{link.autor}}</a>
              </td>
              <td>
                <a href>{{link.url}}</a>
              </td>
              <td>
                <button type="button" class="btn btn-warning" v-on:click="removeLink(link)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      cambio de prueba 2
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyBEa4Jt876YF3LwN6l08V76QfZbooubSnE",
  authDomain: "vuefirebasejson.firebaseapp.com",
  databaseURL: "https://vuefirebasejson.firebaseio.com",
  projectId: "vuefirebasejson",
  storageBucket: "",
  messagingSenderId: "1027561535191",
  appId: "1:1027561535191:web:f4df79b045b2cf1110e292",
  measurementId: "G-6C40LE8JWJ"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let linksRef = db.ref("links");

export default {
  name: "app",
  firebase: {
    links: linksRef
  },
  data() {
    return {
      newLink: {
        title: "",
        autor: "",
        url: ""
      },
      links: []
    };
  },
  methods: {
    addLink: function() {
      linksRef.push(this.newLink);
    },
    removeLink: function(key) {
      linksRef.child(key.key).remove();
    }
  },
  created() {
    db.ref("links").on("value", e => {
      var temp = e.val();
      Object.getOwnPropertyNames(temp).forEach(function(val) {
        temp[val].key = val;
      });
      this.links = temp;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
}

#container-table {
  max-height: 300px;
  overflow: scroll;
}
</style>

