<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by description"
          v-model="description"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchDescription"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Blog Posts</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(blog, index) in blogs"
          :key="index"
          @click="setActiveBlog(blog, index)"
        >
          {{ blog.name }}
        </li>
      </ul>

    
    </div>
    <div class="col-md-6">
      <div v-if="currentBlog">
        <h4>Blog Post</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentBlog.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentBlog.description }}
        </div>
     

        <router-link :to="'/blogs/' + currentBlog.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Blog name...</p>
      </div>
    </div>
  </div>
</template>

<script>
import BlogDataService from "../services/BlogDataService";

export default {
  name: "blogs-list",
  data() {
    return {
      blogs: [],
      currentBlog: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveBlogs() {
      BlogDataService.getAll()
        .then(response => {
          this.blogs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveBlogs();
      this.currentBlog = null;
      this.currentIndex = -1;
    },

    setActiveBlog(blog, index) {
      this.currentBlog = blog;
      this.currentIndex = blog ? index : -1;
    },


    searchDescription() {
      BlogDataService.findByDescription(this.description)
        .then(response => {
          this.blogs = response.data;
          this.setActiveBlog(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveBlogs();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
