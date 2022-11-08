<template>
  <nav>
    <router-link to="/">Home |</router-link>
    <router-link to="/posts/:id"> Details</router-link>
  </nav>
  <router-view/>
</template>

<script>

</script>


<style>
#app {
  font-family: Verdana, sans-serif;
  text-align: center;
  height: 1410px;
  color: white;
  width: 100vw;
  background-color: rgb(6, 11, 22); /* For browsers that do not support gradients */
  /* background-image: linear-gradient(to bottom right, rgba(20, 27, 24, 0.6), rgba(5, 29, 25, 0.31),  rgba(86, 158, 146, 0.884)); */
  background-image: url("./assets/senseBackground.jpg");
}

nav a { 
  color: white;
  background-color: black;
}


</style>
