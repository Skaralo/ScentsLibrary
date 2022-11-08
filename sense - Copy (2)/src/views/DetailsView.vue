<template>
  <div class="about">
    <h3 v-if="error">{{error}}</h3>
    <div v-if="post" class="post"></div>
    <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>  
  </div>
  <img :src="post.image.url">
</template>

<script>
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  setup(props) {
    const { post, error, load} = getPost(props.id) 

    load()
    return { post, error }
  }
}
</script>

<style scoped>

.about {
 position: absolute;
  z-index: 9;
  height: 300px;
  /* margin: 90px 90px 90px 190px; */
  top: 21%;
  left: 50%;
  width: 45%;
  background-color: rgba(26,26,28,0.9 );
  /* height: 180px; */
  border-radius: 9px;
  opacity: 0.5;
   border: 1px solid rgba(255, 255, 255, 0.212);
   backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.post {
  position: relative;
  width: 90px;
  height: 90px;
}

h3 {
  font-size: 3rem;
  padding: 0px
}

p {
  font-size: 1.8rem;
  margin-bottom: 90px;
  position: relative;
}

img {
  margin: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>






