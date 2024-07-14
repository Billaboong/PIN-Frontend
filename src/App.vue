<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark" style="background-color: #14428b !important;">
      <a class="navbar-brand" href="/">
    <img src="https://www.peopleinneed.net//images/pin-bile-en.svg?ts=1714026580" width="82" height="50" class="d-inline-block align-top" alt="">
    
  </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Blog Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Create Blog</router-link>
        </li>
      </div>
    </nav>


    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
