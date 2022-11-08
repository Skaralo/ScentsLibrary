<template>
<div class="home">
  </div>

  <button @click="getPosts">Load scents</button>
  <div class="scentsList">
    <!-- <div class="boxNotOpaque"></div> -->
    
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <div class="listItem" v-for="post in posts" :key="post.id">
      <router-link :to="{name: 'details', params: {id: post.id }}">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <hr />
    </router-link>
    </div>  
    </div>
</template>

<script>
import axios from 'axios'

export default {
  // name: 'ScentsLibrary',
  data() { 
    return {
      posts: [],
      errorMsg: ''
    }
  },
  methods: {
    getPosts() {
      axios.get('https://opdracht.sense-company.com/scents')
        .then((response) => {
          // console.log(response.data)
          this.posts = response.data
        })
        .catch((error) => {
          console.log(error)
          this.errorMsg = 'Oeps, sorry er ging iets mis'
        })
    }
  }
}
</script>

<style>

.home {
background-image: url("../assets/senseBackground.jpg");
}

button {
  margin-top: 30px;
  width: 21%;
  height: 6%;
  color: white;
  background-color: transparent;
  border: 1px solid, white; 
  border-radius: 45px;

}

.scentsList {
  margin-top: 45px;
}

.listItem {
  display: block;
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  
  width: 45%;
  background-color: rgba(26,26,28,0.9 );
  height: 180px;
  border-radius: 9px;
  opacity: 0.5;
  margin-top: 6px;
   border: 1px solid rgba(255, 255, 255, 0.212);
   backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
}

hr {
  display: none;
}

h3 {
  color: white;
  font-weight: 100;
  font-size: 1.5rem;
  opacity: 1 !important;
}

p {
  color: white;
}

a {
  text-decoration: none;
}
  
</style>

